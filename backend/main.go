package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
		
)

func main() {
    url := "http://localhost:8080/species"

    // Данные запроса
    data := map[string]interface{}{
        "scientificName": "Panthera pardus",
        "CommonName":     "Leopard",
        "Category":        "Animal",
        "Status":          "Vulnerable",
        "Description":     "Large cat species",
        "Habitat":         "Savannahs and forests",
				"Population":				100,
				"coordinates": [][]float64{
					{55.760438, 37.436393},
					{55.760457, 37.435314},
					{55.760267, 37.434449},
					{55.760868, 37.432774},
				},
    }


    
    // Преобразуем данные в JSON
    jsonData2, err2 := json.Marshal(data)
    if err2 != nil {
        fmt.Println("Error marshalling data:", err2)
        return
    }

    resp2, err2 := http.Post(url, "application/json", bytes.NewBuffer(jsonData2))
    if err2 != nil {
        fmt.Println("Error making request:", err2)
        return
    }
    defer resp2.Body.Close()

    body := new(bytes.Buffer)
    body.ReadFrom(resp2.Body)
    fmt.Println("Response:", body.String())
}
