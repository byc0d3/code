---
layout: pages.njk
title: Apche !!!
---

<!-- Page Content-->
<section class="py-5">
	<div class="container">
		<div class="row text-center mb-5">
			<h1 class="fw-bolder">Apache</h1>
			<p class="lead fw-normal text-muted mb-0">El servidor HTTP Apache es un servidor web HTTP de código abierto. Aqui veremos como se instala y configura.</p>
		</div>
	</div>
</section>

<section class="">
	<div class="container">
		<div class="row mb-3">

## Empezando 🚀

Estas instrucciones estan garantizadas para Sistemas Operativos basados en REHEL como Rocky Linux, Almalinux y Centos.

## Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

-   Sistema Operativo (Rocky Linux, Almalinux o Centos)
-   Conexion a Internet.
-   Sistema actualizado.
-   Permisos de sudo.

## Instalación 🔧

1- Para instalar la ultima version de apache usamos:

```bash
dnf install -y httpd
```

## Version 📦

**Verion de Apache**

1- Para ver la version del apache:

```bash
httpd -v
```

## Comandos basicos ⚙️

1- Status de Servicio:

```bash
systemctl status httpd
```

2- Iniciar Servicio:

```bash
systemctl start httpd
```

3- Activar inicio automatico del Servicio:

```bash
systemctl enable httpd
```

4- Detener Servicio::

```bash
systemctl stop httpd
```

5- Reiniciar Servicio::

```bash
systemctl restart httpd
```

6- Desactivar inicio automatico del Servicio:

```bash
systemctl disable httpd
```

## Autores ✒️

-   **byc0d3**

Para más información visita la página oficial de [Apache](https://httpd.apache.org/).

    	</div>
    </div>

</section>
