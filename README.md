
# 🛠️ Manual Básico para Desarrollos en Angular

## 1. Desarrollo Local

> 💻 **Objetivo:** Programar, probar y verificar que la aplicación funciona correctamente en tu equipo local.

```bash
# Clonar el repositorio (si ya existe en remoto)
git clone https://github.com/usuario/mi-proyecto-angular.git
cd mi-proyecto-angular

# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
ng serve
```

Accede en el navegador:  
`http://localhost:4200`

---

## 2. Servidor Local (Preproducción)

> 🌐 **Objetivo:** Simular un entorno productivo sirviendo archivos estáticos generados por `ng build`.

### 2.1. Instalar http-server

```bash
npm install -g http-server
```

### 2.2. Compilar el proyecto

```bash
ng build --configuration=production
```

Esto genera los archivos estáticos en la carpeta `dist/<nombre-proyecto>`.

### 2.3. Lanzar servidor de preproducción

```bash
cd dist/<nombre-proyecto>
http-server -o
```

Accede en el navegador:  
`http://localhost:8080`

---

## 3. Subida al Repositorio (GitHub)

> 🔄 **Objetivo:** Versionar tu código y compartirlo en remoto.

```bash
# Ver estado
git status

# Añadir cambios
git add .

# Commit
git commit -m "mensaje descriptivo"

# Subir a la rama deseada
git push origin main
```

---

## 4. Despliegue Automático (GitHub Actions + Firebase)

> 🚀 **Objetivo:** Que con un simple `git push` se despliegue automáticamente a Firebase Hosting.

### 4.1. Configurar Firebase

```bash
firebase login
firebase init
# Elegir Hosting y GitHub Actions cuando te lo pregunte
```

### 4.2. Añadir workflow

Confirma que tienes el archivo:

```bash
.github/workflows/firebase-hosting-merge.yml
```

Con el contenido generado por Firebase CLI.

### 4.3. Crear script para deploy (opcional)

En tu `package.json`:

```json
"scripts": {
  "deploy": "ng build --configuration=production && firebase deploy"
}
```

Y ejecutas simplemente:

```bash
npm run deploy
```

---

## ✅ Resultado final

- En desarrollo: `http://localhost:4200`
- En preproducción: `http://localhost:8080`
- En producción: `https://<tu-proyecto>.web.app`
