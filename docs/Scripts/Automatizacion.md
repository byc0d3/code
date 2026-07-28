---
title: Automatización
---

# 🚀 Suite de Automatización Rocky Linux

Esta es la guía de referencia rápida para ejecutar cualquiera de los scripts de infraestructura. Recuerda reemplazar `"URL"` por el enlace real (ej. GitHub Raw, GitLab o tu servidor web) donde estén alojados los scripts.

## 🖥️ 1. Servidor Base (`server.sh`)

*Prepara el servidor, aplica reglas sysctl, limits y Fail2Ban.*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/server.sh?$(date +%s)" -o /tmp/server.sh && sudo bash /tmp/server.sh
    ```

2. **Modo No Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/server.sh?$(date +%s)" -o /tmp/server.sh && sudo HOSTNAME="srv-app.dominio.local" bash /tmp/server.sh
    ```

## 🐘 2. PHP (`php.sh`)

*Instala PHP de Remi Repo con FPM optimizado.*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/php.sh?$(date +%s)" -o /tmp/php.sh && sudo bash /tmp/php.sh
    ```

2. **Modo No Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/php.sh?$(date +%s)" -o /tmp/php.sh && sudo PHP_VERSION="8.3" bash /tmp/php.sh
    ```

## 🗄️ 3. PostgreSQL (`postgres.sh`)

*Instala Postgres 18 bloqueando root y creando el usuario de red `admindb`.*

1. **Modo Único (100% Automático):**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/postgres.sh?$(date +%s)" -o /tmp/postgres.sh && sudo bash /tmp/postgres.sh
    ```

## 🐬 4. MariaDB (`mariadb.sh`)

*Detecta e instala la última versión estable, securiza y crea `admindb`.*

1. **Modo Único (100% Automático):**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/mariadb.sh?$(date +%s)" -o /tmp/mariadb.sh && sudo bash /tmp/mariadb.sh
    ```

## 🌐 5. Configuración de Red (`set_network.sh`)

*Configura IP estática y reglas PBR (Policy Based Routing).*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/set_network.sh?$(date +%s)" -o /tmp/set_network.sh && sudo bash /tmp/set_network.sh
    ```

2. **Modo No Interactivo (Tarjeta Enrutada - con Gateway):**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/set_network.sh?$(date +%s)" -o /tmp/set_network.sh && sudo DEVICE="ens224" IP="10.31.196.49" PREFIX="25" GW="10.31.196.1" bash /tmp/set_network.sh
    ```

3. **Modo No Interactivo (Red Local/Backend - Sin Gateway):**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/set_network.sh?$(date +%s)" -o /tmp/set_network.sh && sudo DEVICE="ens225" IP="192.168.10.5" PREFIX="24" GW="" bash /tmp/set_network.sh
    ```

## 💿 6. Agregar Nuevo Disco (`extend_volume.sh`)

*Agrega un nuevo disco físico al servidor (ej. `/dev/sdc`) y expande el volumen LVM.*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/extend_volume.sh?$(date +%s)" -o /tmp/extend_volume.sh && sudo bash /tmp/extend_volume.sh
    ```

2. **Modo No Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/extend_volume.sh?$(date +%s)" -o /tmp/extend_volume.sh && sudo TARGET_DISK="/dev/sdc" TARGET_PATH="/home" bash /tmp/extend_volume.sh
    ```

## 📈 7. Redimensionar Disco Existente (`resize_volume.sh`)

*Detecta crecimiento del disco desde VMware/AWS, estira la partición y expande el volumen LVM.*

1. **Modo Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/resize_volume.sh?$(date +%s)" -o /tmp/resize_volume.sh && sudo bash /tmp/resize_volume.sh
    ```

2. **Modo No Interactivo:**

    ```{.bash .copy linenums="1"}
    curl -fsSL "https://raw.githubusercontent.com/byc0d3/scripts/refs/heads/main/resize_volume.sh?$(date +%s)" -o /tmp/resize_volume.sh && sudo TARGET_PV="/dev/sda2" TARGET_PATH="/" bash /tmp/resize_volume.sh
    ```
