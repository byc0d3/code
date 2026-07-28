---
title: Scripts para Fedora
---

# 🚀 Configuración de Workstation (Fedora)

Esta guía de referencia rápida detalla los scripts disponibles para preparar y configurar tu entorno de trabajo personal en **Fedora Linux**. A diferencia de los servidores, estos scripts están pensados para automatizar la instalación de herramientas de desarrollo, configuraciones de terminal y aplicaciones de escritorio.

!!! tip "Caché de Descargas"
    Notarás que los comandos incluyen `?$(date +%s)` al final de la URL. Esto evita que `curl` descargue una versión en caché y asegura que siempre ejecutes la versión más reciente de cada script.

## 🐚 1. Entorno Zsh (`zsh.sh`)

*Instala Zsh, Oh My Zsh, y configura plugins de productividad (autosuggestions, syntax highlighting) junto con un tema moderno.*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/zsh.sh?$(date +%s)" -o /tmp/zsh.sh && bash /tmp/zsh.sh
    ```
