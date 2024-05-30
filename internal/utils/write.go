package utils

import (
	"os"
	"path/filepath"
)

func WriteData(path string, data []byte) error {
	directory, error := filepath.Abs("../src")
	if error != nil {
		return error
	}

	file, error := os.Create(filepath.Join(directory, "content", path, "index.json"))

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
