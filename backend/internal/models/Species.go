package models

import (
	"time"

	"gorm.io/gorm"
)

type Species struct {
	ID             uint   `gorm:"primaryKey" json:"id"`
	ScientificName string `gorm: not null`
	CommonName     string
	Category       string         `gorm:"not null"` // Категория (например, растение, животное, птица)
	Status         string         `gorm:"not null"` // Статус в Красной книге (например, исчезающий, уязвимый и т.д.)
	Description    string         // Описание вида
	Habitat        string         // Среда обитаяни
	Population		 int						// Популяция вида
	CreatedAt      time.Time      // Время создания записи
	UpdatedAt      time.Time      // Время последнего обновления
	DeletedAt      gorm.DeletedAt `gorm:"index"` // Мягкое удаление
}