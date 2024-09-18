package models

import (
    "gorm.io/gorm"
)

type Admin struct {
    gorm.Model
    Username string `gorm:"unique;not null"`
    Password string `gorm:"not null"` // Хранит хэшированный пароль
		IsAdmin  bool   `gorm:"default:false"`
}

type Input struct {
	Username string `json:"username"`
	Password string `json:"password"`
}