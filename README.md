# Publicador de Vídeos — sitio para GitHub Pages

Sitio estático bilingüe preparado para la aplicación Android **Publicador de Vídeos / Video Publisher**.

## Datos configurados

Los datos públicos se centralizan en `assets/config.js`:

- Titular y desarrollador: `Ezequiel Galán`.
- Correo público: `videopublisher.zackigm@gmail.com`.
- Fecha efectiva: `7 de noviembre de 2026` / `November 7, 2026`.

El nombre legal deberá coincidir con la identidad verificada en Google Play Console. Si cambia, basta con modificar `developerName` en `assets/config.js`.

Revisa el texto con asesoramiento jurídico si la aplicación cambia, incorpora publicidad, suscripciones, analítica o nuevos tratamientos de datos.

## Publicar con GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `video-publisher-site`.
2. Sube **el contenido de esta carpeta**, de modo que `index.html` quede en la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main`, carpeta `/ (root)` y pulsa **Save**.
6. GitHub mostrará una dirección similar a `https://usuario.github.io/video-publisher-site/`.

Cuando compres el dominio, añade un archivo `CNAME` con el dominio y configura en IONOS los registros DNS que indique GitHub Pages. Activa **Enforce HTTPS** después de que GitHub detecte el certificado.

## Direcciones para Google

- Inicio: `/index.html`
- Política de privacidad: `/privacy.html`
- Condiciones de uso: `/terms.html`
- Ayuda y contacto: `/support.html`
- Retirada de acceso y eliminación de datos: `/deletion.html`

La aplicación no crea una cuenta propia. La página de eliminación explica cómo revocar OAuth y borrar los datos locales.

