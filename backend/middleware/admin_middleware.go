package middleware

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/LexBokun/Redbook_GO_React/backend/utils"
)

//Middleware для проверки прав администратора
func AdminRequired(c *gin.Context) {
    tokenStr := c.Request.Header.Get("Authorization")
    if tokenStr == "" {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
        c.Abort()
        return
    }

    // Удаление "Bearer " из начала строки, если он есть
    if len(tokenStr) > 7 && tokenStr[:7] == "Bearer " {
        tokenStr = tokenStr[7:]
    }

    claims, err := utils.ParseToken(tokenStr)
    if err != nil || !claims.IsAdmin {
        c.JSON(http.StatusForbidden, gin.H{"error": "Admin privileges required"})
        c.Abort()
        return
    }

    // Добавление данных о пользователе в контекст
    c.Set("userID", claims.UserID)
    c.Set("isAdmin", claims.IsAdmin)

    c.Next()
}
