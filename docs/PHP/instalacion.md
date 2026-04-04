---
title: Instalación
---

# 🚀 PHP

## 🛠️ Preparación del Sistema

1. **Activar CRB y EPEL (fundamentales para dependencias)**

    ```{.bash .copy linenums="1"}
    sudo dnf config-manager --set-enabled crb
    sudo dnf install epel-release -y
    ```

2. **Instalar el repositorio de Remi (Asegúrate de que sea la versión de tu OS, 9 o 10)**

    ```{.bash .copy linenums="1"}
    sudo dnf install http://rpms.remirepo.net/enterprise/remi-release-10.rpm -y
    ```

3. **Configuración de PHP 8.5**

    ```{.bash .copy linenums="1"}
    sudo dnf module reset php
    sudo dnf module list php
    sudo dnf module enable php:remi-8.5 -y
    ```

## 📦 Instalacion

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
    php-soap \
    php-opcache
    ```

## ⚙️ Configuraciones

1. **Editamos php-fpm para que trabaje con NGINX**

    ```{.bash .copy linenums="1"}
    sudo nano /etc/php-fpm.d/www.conf
    ```
2. **Descomentamos y modificamos estas lineas**

    ```{.bash .copy linenums="1"}
    user = nginx
    group = nginx
    listen.owner = nginx
    listen.group = nginx
    listen.mode = 0660
    ```

## 🔧 Comandos

1. **Probamos la configuracion**

    ```{.bash .copy linenums="1"}
    sudo nginx -t
    ```

2. **Reiniciamos lo servicios**

    ```{.bash .copy linenums="1"}
    sudo systemctl restart nginx php-fpm
    ```
