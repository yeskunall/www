package literalclub

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"path/filepath"

	"github.com/Khan/genqlient/graphql"
)

type authedTransport struct {
	wrapped http.RoundTripper
}

func (t *authedTransport) RoundTrip(request *http.Request) (*http.Response, error) {
	key := os.Getenv("LITERAL_CLUB_ACCESS_TOKEN")
	request.Header.Set("Authorization", "Bearer "+key)

	return t.wrapped.RoundTrip(request)
}

func GetBooks() error {
	client := graphql.NewClient("https://literal.club/graphql/", &http.Client{Transport: &authedTransport{wrapped: http.DefaultTransport}})
	ctx := context.Background()

	response, error := booksByReadingStateAndProfile(ctx, client, os.Getenv("LITERAL_PROFILE_ID"))
	if error != nil {
		return error
	}

	// NOTE(yeskunall): is this the Go-way to do things?
	data, error := json.Marshal(response.BooksByReadingStateAndProfile)
	if error != nil {
		return error
	}

	error = writeData("index.json", data)
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

	file, error := os.Create(filepath.Join(directory, "content", "books", path))

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
