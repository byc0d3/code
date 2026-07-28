---
title: Gestión de Volúmenes (LVM)
---

# 💽 Gestión de Volúmenes y Discos

En Rocky Linux, la mayoría de las instalaciones utilizan **LVM (Logical Volume Manager)** por defecto. A continuación se detallan los pasos técnicos para gestionar el almacenamiento, ya sea redimensionando un disco existente (muy común en máquinas virtuales) o agregando un disco físico nuevo.

!!! warning "Precaución"
    Modificar particiones y volúmenes conlleva el riesgo de pérdida de datos si se comete un error. Se recomienda encarecidamente realizar un **snapshot** o respaldo completo de la máquina virtual antes de ejecutar estos comandos.

---

## 📈 1. Expandir un Disco Existente (VMware / AWS)

Este escenario aplica cuando has incrementado el tamaño de un disco de la máquina virtual desde tu hipervisor o panel cloud y necesitas que el sistema operativo lo reconozca. Esto te permitirá expandir **cualquier partición** lógica existente (por ejemplo `/`, `/home`, `/var`, etc.).

1. **Instalar herramienta de expansión (si no está instalada):**

    ```{.bash .copy linenums="1"}
    sudo dnf install -y cloud-utils-growpart
    ```

2. **Expandir la partición física:**

    Suponiendo que tu disco es `/dev/sda` y la partición LVM es la número `2` (`/dev/sda2`).

    ```{.bash .copy linenums="1"}
    sudo growpart /dev/sda 2
    ```

3. **Actualizar el Volumen Físico (PV):**

    ```{.bash .copy linenums="1"}
    sudo pvresize /dev/sda2
    ```

4. **Extender el Volumen Lógico (LV):**

    Para extender el volumen lógico que desees (como la raíz `rl-root`, `rl-home`, etc.). Verifica la ruta exacta de tu volumen con el comando `df -h` o `lvs`.

    ```{.bash .copy linenums="1"}
    sudo lvextend -l +100%FREE /dev/mapper/rl-root
    ```

5. **Redimensionar el Sistema de Archivos:**

    Rocky Linux usa `XFS` por defecto. Aplica el comando sobre el punto de montaje que has expandido (ej. `/`, `/home`, etc.). Si usas ext4, cambia el comando por `resize2fs`.

    ```{.bash .copy linenums="1"}
    sudo xfs_growfs /
    ```

---

## 💿 2. Agregar un Disco Nuevo

Este escenario aplica cuando has agregado un segundo disco duro (ej. `/dev/sdb`) a tu servidor y deseas sumarlo al volumen lógico actual (ej. expandir el espacio de `/home` o `/`).

1. **Identificar el nuevo disco:**

    Ejecuta el siguiente comando para confirmar el nombre del nuevo disco (generalmente `/dev/sdb` o `/dev/nvme1n1`).

    ```{.bash .copy linenums="1"}
    lsblk
    ```

2. **Crear un Volumen Físico (PV) en el disco nuevo:**

    ```{.bash .copy linenums="1"}
    sudo pvcreate /dev/sdb
    ```

3. **Añadir el disco al Grupo de Volúmenes (VG):**

    Identifica el nombre de tu Volume Group ejecutando `vgs` (usualmente se llama `rl`).

    ```{.bash .copy linenums="1"}
    sudo vgextend rl /dev/sdb
    ```

4. **Extender el Volumen Lógico (LV):**

    Por ejemplo, si queremos darle todo el espacio del nuevo disco al volumen `/home`.

    ```{.bash .copy linenums="1"}
    sudo lvextend -l +100%FREE /dev/mapper/rl-home
    ```

5. **Redimensionar el Sistema de Archivos (XFS):**

    Finalmente, actualiza el sistema de archivos para reflejar el nuevo tamaño.

    ```{.bash .copy linenums="1"}
    sudo xfs_growfs /home
    ```

!!! tip "Validación"
    En ambos casos, una vez finalizado el proceso, puedes ejecutar `df -h` para verificar que el espacio libre ahora se refleja correctamente en tu sistema.
