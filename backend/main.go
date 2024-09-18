package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "http://localhost:8080/admin/species"

    // Создаем данные запроса
    data := map[string]interface{}{
        "scientificName": "Panthera pardus",
        "CommonName":     "Leopard",
        "Category":        "Animal",
        "Status":          "Vulnerable",
        "Description":     "Large cat species",
        "Habitat":         "Savannahs and forests",
				"Population":				100,
    }
    
    // Преобразуем данные в JSON
    jsonData, err := json.Marshal(data)
    if err != nil {
        fmt.Println("Error marshalling data:", err)
        return
    }

    resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println("Error making request:", err)
        return
    }
    defer resp.Body.Close()

    // Читаем и выводим ответ
    body := new(bytes.Buffer)
    body.ReadFrom(resp.Body)
    fmt.Println("Response:", body.String())
}
