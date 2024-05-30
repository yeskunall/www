package anilist

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/Khan/genqlient/graphql"
	"github.com/yeskunall/www/internal/utils"
)

func GetCurrentlyWatching() error {
	client := graphql.NewClient("https://graphql.anilist.co", http.DefaultClient)
	ctx := context.Background()

	id := os.Getenv("ANILIST_USER_ID")
	userId, error := strconv.ParseInt(id, 10, 32)
	if error != nil {
		return error
	}

	response, error := getUserMediaListCollection(ctx, client, int32(userId), "yeskunall", MediaListStatusCurrent, MediaTypeAnime)
	if error != nil {
		return error
	}

	data, error := json.Marshal(response.MediaListCollection.GetLists())
	if error != nil {
		return error
	}

	error = utils.WriteData("anime", data)
	if error != nil {
		return error
	}

	return nil
}

func writeData(path string, data []byte) error {
	directory, error := filepath.Abs("../src")
	if error != nil {
		return error
	}

	file, error := os.Create(filepath.Join(directory, "content", "anime", path))

	if error != nil {
		return error
	}

	defer file.Close()

	_, error = file.Write(data)
	if error != nil {
		return error
	}

	return nil
}
