---
title: Scripts de Automatización
---

# 🚀 Scripts de Automatización

Guía de referencia rápida para ejecutar cualquiera de los scripts de infraestructura en servidores Rocky Linux.

## 📦 Scripts

### 🖥️ 1. Herramientas principales en Servidores

Configuración base del servidor: aplica reglas sysctl, limits y Fail2Ban, instalación de servicios, redes, etc.

1. **Modo Interactivo**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/config_server.sh?$(date +%s)" -o /tmp/config_server.sh && bash /tmp/config_server.sh
    ```