package utils

import (
	"os"
	"time"
	"github.com/joho/godotenv"
	"log"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/dgrijalva/jwt-go"
)

func init(){
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error load .env file")
	}
}
// Секретный ключ для подписи JWT токенов

// CreateToken создает новый JWT токен
var jwtSecret = []byte(os.Getenv("JWT_SECRET_KEY"))

func CreateToken(userID uint, isAdmin bool) (string, error) {
	claims := models.Claims{
		UserID:  userID,
		IsAdmin: isAdmin,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), // Токен действует 24 часа
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

// ParseToken проверяет и расшифровывает JWT токен
func ParseToken(tokenStr string) (*models.Claims, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &models.Claims{}, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})

	if err != nil || !token.Valid {
		return nil, err
	}

	claims, ok := token.Claims.(*models.Claims)
	if !ok {
		return nil, err
	}

	return claims, nil
}
