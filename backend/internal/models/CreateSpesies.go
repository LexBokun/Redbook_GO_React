package models

type CreateSpeciesRequest struct {
		ScientificName string `gorm:"not null" json:"scientific_name"`
    CommonName     string `json:"common_name" `
    Category       string `gorm:"not null" json:"category"`  // Категория (например, растение, животное, птица)
    Status         string `gorm:"not null" json:"status"`    // Статус в Красной книге
    Description    string `json:"description"`
    Habitat        string `json:"habitat"` 
    Population     int    `gorm:"not null" json:"population"`
}