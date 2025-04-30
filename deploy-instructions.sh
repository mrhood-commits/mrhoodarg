#!/bin/bash
# Instrucciones para desplegar el sitio web de MR HOOD

# 1. Instalar dependencias
npm install

# 2. Construir el sitio estático
npm run export

# 3. El sitio estático se generará en la carpeta 'out'
# Todos los archivos de esta carpeta deben subirse a la raíz de public_html

echo "La construcción ha finalizado. Los archivos estáticos están en la carpeta 'out'."
echo "Sube todos los archivos de la carpeta 'out' a la raíz de tu directorio public_html en tu hosting."
