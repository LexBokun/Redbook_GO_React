package models

type CreateSpeciesRequest struct {
	ScientificName string `gorm:"not null" json:"scientific_name"`
	CommonName     string `json:"common_name" `
	Class          string `gorm:"not null" json:"category"` // Категория (например, растение, животное, птица)
	Group          string `gorm:"not null"`                 // Отряд вида
	Family         string `gorm:"not null"`                 // Семейство вида
	Kind           string `gorm:"not null"`                 // Род вида
	Status         string `gorm:"not null" json:"status"`   // Статус в Красной книге
	Description    string `json:"description" gorm:"type:text"`
	Habitat        string `json:"habitat"`
	Population     int    `gorm:"not null" json:"population"`
}
