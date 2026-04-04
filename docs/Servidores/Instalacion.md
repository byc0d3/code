---
title: Instalacion
---

# 🚀 Rocky Linux

## 🛠️ Preparación del Sistema

1. **Instalamos EPEL y habilitamos CRB (necesario para dependencias de desarrollo)**

    ```{.bash .copy linenums="1"}
    sudo dnf install epel-release -y
    sudo dnf config-manager --set-enabled crb
    ```

2. **Actualizamos todo el sistema una sola vez**

    ```{.bash .copy linenums="1"}
    sudo dnf upgrade -y
    ```

## 📦 Instalación

1. **Instalamos esenciales**

    ```{.bash .copy linenums="1"}
    sudo dnf install dnf-utils nano vim tree wget btop traceroute iproute telnet nmap tcpdump iputils unzip tar rsync util-linux-user nfs-utils bind-utils chrony -y
    ```

## ⚙️ Configuraciones

1. **Configuración de Host**

    ```{.bash .copy linenums="1"}
    sudo hostnamectl set-hostname server-app01-pro
    ```

2. **SELinux**

    ```{.bash .copy linenums="1"}
    sudo sed -i 's/SELINUX=enforcing/SELINUX=permissive/' /etc/selinux/config
    ```

3. **Time-Zone y Chrony**

    ```{.bash .copy linenums="1"}
    sudo timedatectl set-timezone America/Caracas
    sudo systemctl enable --now chronyd
    ```

4. **History (Universal para Bash y Zsh)**

    ### Para Bash

    ```{.bash .copy linenums="1"}
    echo "export HISTTIMEFORMAT='%d-%m-%Y %H:%M:%S '" >> ~/.bashrc
    ```

    ### Ejecuta:

    ```{.bash .copy linenums="1"}
    source ~/.bashrc
    ```

    ### Para Zsh

    ### Edita el archivo zshrc

    ```{.bash .copy linenums="1"}
    nano ~/.zshrc
    ```

    ### Agrega:

    ```{.bash .copy linenums="1"}
    export HIST_STAMP="dd.mm.yyyy"
    alias history='fc -El 1'
    ```

    ### Ejecuta:

    ```{.bash .copy linenums="1"}
    source ~/.zshrc
    ```

5. **Habilitar servicios NFS**

    ```{.bash .copy linenums="1"}
    sudo dnf install -y nfs-utils
    sudo systemctl enable --now nfs-server
    ```

6. **RPM Fusion**

    ```{.bash .copy linenums="1"}
    sudo dnf install --nogpgcheck "https://mirrors.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm" -y
    sudo dnf install --nogpgcheck "https://mirrors.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-$(rpm -E %rhel).noarch.rpm" -y
    ```

7. **reboot**

    ```{.bash .copy linenums="1"}
    sudo reboot
    ```
