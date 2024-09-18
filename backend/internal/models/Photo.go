package models

import (
	"time"

	"gorm.io/gorm"
)

type Photo struct {
	ID        uint           `gorm:"primaryKey"`
	URL       string         `gorm:"not null"` // URL фотографии
	Caption   string         // Описание фотографии (если есть)
	SpeciesID uint           `gorm:"not null"` // Внешний ключ на Species
	CreatedAt time.Time      // Время создания записи
	UpdatedAt time.Time      // Время последнего обновления
	DeletedAt gorm.DeletedAt `gorm:"index"` // Мягкое удаление
}
