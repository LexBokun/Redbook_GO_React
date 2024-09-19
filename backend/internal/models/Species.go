package models

import (
	"time"
	"gorm.io/gorm"
)

type Species struct {
	ID             uint `gorm:"primaryKey" json:"id"`
	ScientificName string
	CommonName     string
	Class	         string         `gorm:"not null"` // Категория (например, растение, животное, птица)
	Group					 string					`gorm:"not null"` // Отряд вида
	Family				 string					`gorm:"not null"` // Семейство вида
	Kind					 string					`gorm:"not null"` // Род вида
	Status         string         `gorm:"not null"` // Статус в Красной книге (например, исчезающий, уязвимый и т.д.)
	Description    string         // Описание вида
	Habitat        string         // Среда обитаяни
	// Coordinates    [][]float64     `gorm:"type:jsonb"` // Поле для координат полигона
	Population     int            // Популяция вида
	CreatedAt      time.Time      // Время создания записи
	UpdatedAt      time.Time      // Время последнего обновления
	DeletedAt      gorm.DeletedAt `gorm:"index"` // Мягкое удаление
}