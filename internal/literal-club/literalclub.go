package literalclub

import (
	"context"
	"encoding/json"
	"net/http"
	"os"

	"github.com/Khan/genqlient/graphql"
	"github.com/yeskunall/www/internal/utils"
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

	error = utils.WriteData("books", data)
	if error != nil {
		return error
	}

	return nil
}
