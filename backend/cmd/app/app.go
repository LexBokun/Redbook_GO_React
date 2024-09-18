package main

import (
	"github.com/LexBokun/Redbook_GO_React/backend/api"
	// "github.com/LexBokun/Redbook_GO_React/backend/controllers"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/gin-gonic/gin"
)

func main() {
	database.InitBD() // Инициализация БД

	r := gin.Default()

	r.GET("/species", api.GetSpecies)
	r.GET("/species/:id", api.GetSpeciesById)
	r.POST("/species", api.CreateSpecies)

	// admin := r.Group("/admin")
  // admin.Use(controllers.AdminRequired)
  //   {
  //     admin.POST("/species", controllers.CreateSpecies)
  //     admin.PUT("/species/:id", controllers.UpdateSpecies)
  //     admin.DELETE("/species/:id", controllers.DeleteSpecies)
  //   }
	r.Run(":8080")
}