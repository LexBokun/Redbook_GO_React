package controllers

import (
    "net/http"
    "github.com/LexBokun/Redbook_GO_React/backend/internal/models"
    "github.com/LexBokun/Redbook_GO_React/backend/services"

    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
)


// Функция для добавления нового вида в базу данных
func CreateSpecies(c *gin.Context) {
    var req models.CreateSpeciesRequest

    // Валидация данных из запроса
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data", "details": err.Error()})
        return
    }

    // Создаем объект для нового вида на основе данных запроса
    species := models.Species{
				ScientificName: req.ScientificName,
        CommonName:     req.CommonName,
        Category:       req.Category,
        Status:         req.Status,
        Description:    req.Description,
        Habitat:        req.Habitat,
    }

    // Получаем подключение к базе данных из контекста
    db, exists := c.Get("db")
    if !exists {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get database connection"})
        return
    }

    database, ok := db.(*gorm.DB)
    if !ok {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Database connection is invalid"})
        return
    }

    err := services.CreateSpecies(database, &species)
    if err != nil {
        if err.Error() == "UNIQUE constraint failed: species.scientific_name" {
            c.JSON(http.StatusConflict, gin.H{"error": "Species with this scientific name already exists"})
        } else {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add species", "details": err.Error()})
        }
        return
    }

    c.JSON(http.StatusCreated, gin.H{
        "message": "Species added successfully",
        "species": species,
    })
}
