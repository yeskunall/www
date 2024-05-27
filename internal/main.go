package main

import (
	"fmt"
	"log"

	dotenv "github.com/joho/godotenv"
	literalclub "github.com/yeskunall/www/internal/literal-club"
)

func main() {
	err := dotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	error := literalclub.GetBooks()
	if error != nil {
		fmt.Println(error)
	}
}
