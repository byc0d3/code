---
title: Gestión de Redes
---

# 🌐 Configuración de Redes

En Rocky Linux, la gestión de la red se realiza principalmente a través de NetworkManager y su herramienta de línea de comandos `nmcli`. A continuación se documentan los procedimientos para configurar interfaces de red tanto para acceso con reglas de enrutamiento avanzadas (PBR), como para redes locales (Backends).

!!! warning "Precaución"
    Asegúrate de ejecutar estos comandos con privilegios de superusuario (`sudo`) y de reemplazar los valores de ejemplo (`ens224`, `10.31.196.49`, etc.) por los parámetros reales de tu infraestructura.

---

## 🛣️ 1. Configurar red con ruta (Policy Based Routing)

Este procedimiento se utiliza cuando necesitas configurar una tarjeta de red enrutada que tiene su propio *Gateway*, definiendo reglas de enrutamiento basadas en políticas (PBR) mediante tablas separadas (ej. `table 5000`).

1. **Eliminar el perfil anterior (Opcional):**

    Si la interfaz ya tenía una conexión generada automáticamente, es recomendable eliminarla.

    ```{.bash .copy linenums="1"}
    sudo nmcli con delete "ens224"
    ```

2. **Crear la nueva conexión:**

    Se establece la IP estática y se deshabilita IPv6. El parámetro `ipv4.never-default yes` asegura que esta ruta no sobreescriba la ruta por defecto del sistema principal (a menos que se especifique lo contrario).

    ```{.bash .copy linenums="1"}
    sudo nmcli con add con-name "ens224" type ethernet ifname "ens224" \
        ipv4.method manual \
        ipv4.addresses "10.31.196.49/25" \
        ipv4.never-default yes \
        ipv6.method disabled
    ```

3. **Configurar enrutamiento y PBR:**

    Añadimos el Gateway y asignamos el tráfico de esta interfaz a una tabla de enrutamiento específica (en este ejemplo, `5000`).

    ```{.bash .copy linenums="1"}
    sudo nmcli con mod "ens224" ipv4.gateway "10.31.196.1"
    sudo nmcli con mod "ens224" ipv4.route-table "5000"
    sudo nmcli con mod "ens224" ipv4.routing-rules ""
    sudo nmcli con mod "ens224" +ipv4.routing-rules "priority 5 iif ens224 table 5000"
    sudo nmcli con mod "ens224" +ipv4.routing-rules "priority 5 from 10.31.196.49 table 5000"
    ```

4. **Levantar la interfaz:**

    ```{.bash .copy linenums="1"}
    sudo nmcli con up "ens224"
    ```

---

## 🏠 2. Configurar red local (Sin Ruta / Backend)

Este método es útil para interfaces secundarias que solo se comunican dentro de una red local o privada (ej. entre servidores web y bases de datos) y no requieren una puerta de enlace (Gateway).

1. **Eliminar el perfil anterior (Opcional):**

    ```{.bash .copy linenums="1"}
    sudo nmcli con delete "ens224"
    ```

2. **Crear la conexión (Sin Gateway):**

    ```{.bash .copy linenums="1"}
    sudo nmcli con add con-name "ens224" type ethernet ifname "ens224" \
        ipv4.method manual \
        ipv4.addresses "192.168.1.10/24" \
        ipv4.never-default yes \
        ipv6.method disabled
    ```

3. **Levantar la interfaz:**

    ```{.bash .copy linenums="1"}
    sudo nmcli con up "ens224"
    ```

---

## 🗑️ 3. Eliminar Interfaz de Red

Si necesitas remover por completo la configuración de un dispositivo (por ejemplo, para volver a configurarlo desde cero), simplemente elimina su perfil en NetworkManager.

1. **Borrar conexión:**

    ```{.bash .copy linenums="1"}
    sudo nmcli con delete "ens224"
    ```
