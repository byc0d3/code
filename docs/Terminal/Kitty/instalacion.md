---
title: Instalación
---

# 🚀 Kitty

## 📦 Instalación

1. **Instalamos Kitty**

    !!! note "EPEL"
        En Rocky Linux, Kitty se encuentra en el repositorio EPEL.

    ```{.bash .copy linenums="1"}
    sudo dnf install kitty
    ```

## ⚙️ Configuraciones

1. **Crear el directorio de configuración**

    ```{.bash .copy linenums="1"}
    mkdir -p ~/.config/kitty
    ```

2. **Editar el archivo de configuración**

    ```{.bash .copy linenums="1"}
    nano ~/.config/kitty/kitty.conf
    ```

3. **Reemplazamos el contenido por la siguiente configuración**

    !!! note "Atención"
        Ajusta `window_logo_path` y las rutas según tu entorno.

    ```{.bash .copy linenums="1"}
    # ==========================================
    # CONFIGURACIÓN COMPLETA DE KITTY
    # ==========================================

    # --- Apariencia y Fuente ---
    font_family Hack Nerd Font Mono
    bold_font        auto
    italic_font auto
    font_size        13.0
    background_opacity 0.85

    # --- Tamaño inicial de la ventana ---
    remember_window_size  yes
    initial_window_width  90c
    initial_window_height 25c

    # --- Rendimiento ---
    sync_to_monitor yes

    # --- Disposición (Requerido para dividir pantalla) ---
    enabled_layouts splits, stack

    # ==========================================
    # ATAJOS DE TECLADO
    # ==========================================

    # --- Crear nuevos paneles (Ctrl + Shift + Flechas) ---
    map ctrl+shift+right launch --location=vsplit --cwd=current
    map ctrl+shift+left  launch --location=vsplit --cwd=current
    map ctrl+shift+down  launch --location=hsplit --cwd=current
    map ctrl+shift+up    launch --location=hsplit --cwd=current

    # --- Moverse entre paneles (Alt + Flechas) ---
    map alt+left  neighboring_window left
    map alt+right neighboring_window right
    map alt+up    neighboring_window up
    map alt+down  neighboring_window down

    # --- Gestión de pestañas y ventanas ---
    map ctrl+shift+w close_window
    map ctrl+shift+t new_tab_with_cwd

    # --- Otros ajustes ---

    # Copiar texto automáticamente al seleccionarlo
    copy_on_select yes

    # Ocultar el ratón al escribir
    mouse_hide_wait -3.0

    # Notificación al finalizar el comando
    notify_on_cmd_finish invisible

    window_logo_path /imagen.png
    window_logo_position bottom-right
    window_logo_alpha 0.9
    window_logo_scale 8
    ```

## 🔧 Comandos

1. **Abrir Kitty**

    ```{.bash .copy linenums="1"}
    kitty
    ```