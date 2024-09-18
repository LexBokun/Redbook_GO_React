package main

import (
	"github.com/LexBokun/Redbook_GO_React/backend/api"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/gin-gonic/gin"
)

func main(){
	database.InitBD() // Инициализация БД

	r := gin.Default()

	r.GET("/species/get", api.GetSpecies)

	r.Run(":8080")
}