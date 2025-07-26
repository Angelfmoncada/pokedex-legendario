# 🚀 Instrucciones de Deploy a GitHub Pages

## Pasos para hacer deploy del Pokédex Legendario

### 1. Preparar el Repositorio en GitHub

1. **Crear un nuevo repositorio** en GitHub:
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nombre sugerido: `pokedex-legendario`
   - Marca como público
   - NO inicialices con README (ya tenemos uno)

### 2. Subir el Código

```bash
# Navega al directorio del proyecto
cd pokedex202502-main

# Inicializa git (si no está inicializado)
git init

# Agrega todos los archivos
git add .

# Hace el primer commit
git commit -m "🔥 Initial commit: Pokédex Legendario with modern design"

# Agrega el repositorio remoto (reemplaza TU-USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/pokedex-legendario.git

# Sube el código
git push -u origin main
```

### 3. Configurar GitHub Pages

1. **Ve a la configuración del repositorio**:
   - En tu repositorio, ve a `Settings` > `Pages`

2. **Configura la fuente**:
   - En "Source", selecciona `GitHub Actions`

3. **El deploy automático se ejecutará**:
   - GitHub Actions detectará el workflow y comenzará el build
   - Puedes ver el progreso en la pestaña `Actions`

### 4. Acceder a tu Pokédex

Una vez completado el deploy (2-5 minutos), tu Pokédex estará disponible en:

```
https://TU-USUARIO.github.io/pokedex-legendario/
```

### 5. Actualizaciones Futuras

Para futuras actualizaciones, simplemente:

```bash
# Haz tus cambios
git add .
git commit -m "✨ Descripción de tus cambios"
git push
```

El deploy se ejecutará automáticamente con cada push a la rama `main`.

## 🔧 Solución de Problemas

### Si el deploy falla:

1. **Verifica el workflow**:
   - Ve a la pestaña `Actions` en tu repositorio
   - Revisa los logs de error

2. **Problemas comunes**:
   - Asegúrate de que el repositorio sea público
   - Verifica que GitHub Pages esté habilitado
   - Confirma que el nombre del repositorio coincida con el `base` en `vite.config.js`

### Si necesitas cambiar el nombre del repositorio:

1. **Actualiza `vite.config.js`**:
   ```javascript
   base: '/NUEVO-NOMBRE-REPOSITORIO/',
   ```

2. **Rebuild y push**:
   ```bash
   npm run build
   git add .
   git commit -m "🔧 Update base path for new repository name"
   git push
   ```

## 🎉 ¡Listo!

Tu Pokédex Legendario estará live en GitHub Pages con:
- ✅ Deploy automático
- ✅ Diseño moderno y responsivo
- ✅ Animaciones fluidas
- ✅ Tema Pokémon auténtico

**¡Comparte tu link y presume tu increíble Pokédex!** 🔥