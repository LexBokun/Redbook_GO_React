package controllers

import (
	"net/http"
	"strconv"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/gin-gonic/gin"
)


func DeleteSpecies(c *gin.Context) {
	idParam := c.Param("id")
	if idParam == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID not provided"})
		return
	}

	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	var species models.Species
	result := database.DB.First(&species, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Species not found"})
		return
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	}

	if err := database.DB.Delete(&species).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Species deleted successfully"})
}
