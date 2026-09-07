---
title: Instalación
---

# 🚀 PHP

## 🛠️ Preparación del Sistema

1. **Activar CRB y EPEL**

    !!! note "Importante"
        Estos repositorios son fundamentales para resolver las dependencias.

    ```{.bash .copy linenums="1"}
    sudo dnf config-manager --set-enabled crb
    sudo dnf install epel-release -y
    ```

2. **Instalar el repositorio de Remi**

    !!! note "Detección automática"
        Se utiliza `$(rpm -E %rhel)` para detectar automáticamente la versión del sistema (Rocky 9 o 10).

    ```{.bash .copy linenums="1"}
    sudo dnf install -y http://rpms.remirepo.net/enterprise/remi-release-$(rpm -E %rhel).rpm
    ```

3. **Configuración de PHP 8.5**

    ```{.bash .copy linenums="1"}
    sudo dnf module reset php
    sudo dnf module list php
    sudo dnf module enable php:remi-8.5 -y
    ```

## 📦 Instalación

1. **Instalación de PHP y Extensiones**

    ```{.bash .copy linenums="1"}
    sudo dnf install -y php-fpm \
    php-cli \
    php-common \
    php-intl \
    php-mbstring \
    php-xml \
    php-gd \
    php-curl \
    php-mysqlnd \
    php-pgsql \
    php-opcache \
    php-zip \
    php-bcmath \
    php-soap
    ```

## ⚙️ Configuraciones

1. **Configurar php-fpm para trabajar con NGINX**

    ```{.bash .copy linenums="1"}
    sudo nano /etc/php-fpm.d/www.conf
    ```

2. **Descomentamos y modificamos estas líneas**

    ```{.bash .copy linenums="1"}
    user = nginx
    group = nginx
    listen.owner = nginx
    listen.group = nginx
    listen.mode = 0660
    ```

## 🔧 Comandos

1. **Probar la configuración de PHP-FPM**

    ```{.bash .copy linenums="1"}
    sudo php-fpm -t
    ```

2. **Reiniciar los servicios**

    ```{.bash .copy linenums="1"}
    sudo systemctl restart nginx php-fpm
    ```