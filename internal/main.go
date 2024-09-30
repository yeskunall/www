package main

import (
	"fmt"
	"log"

	dotenv "github.com/joho/godotenv"
	anilist "github.com/yeskunall/www/internal/anilist"
	literalclub "github.com/yeskunall/www/internal/literal-club"
)

func main() {
	error := dotenv.Load()
	if error != nil {
		log.Fatal("Error loading .env file", error)
	}

	error = anilist.GetCurrentlyWatching()
	if error != nil {
		fmt.Println(error)
	}

	error = literalclub.GetBooks()
	if error != nil {
		fmt.Println(error)
	}
}
