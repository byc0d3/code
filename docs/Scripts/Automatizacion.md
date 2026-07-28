---
title: Automatización
---

# 🚀 Suite de Automatización para server en Rocky Linux

Esta es la guía de referencia rápida para ejecutar cualquiera de los scripts de infraestructura.

## 🖥️ 1. Herramientas principales en Servidores

*Configuracion base de servidor, aplica reglas sysctl, limits y Fail2Ban, instalacion de servicios, redes, etc*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/config_server.sh?$(date +%s)" -o /tmp/config_server.sh && bash /tmp/config_server.sh
    ```

