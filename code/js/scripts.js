function addCopyButtons() {
	const codeBlocks = document.querySelectorAll("pre");

	codeBlocks.forEach((block) => {
		// Crear el botón de copia
		const button = document.createElement("button");
		button.className = "copy-button";
		button.innerHTML = "📋"; // Puedes usar un ícono o emoji
		button.title = "Copiar código";

		// Agregar el botón al bloque de código (fuera del <code>)
		block.appendChild(button);

		// Copiar el texto al hacer clic en el botón
		button.addEventListener("click", () => {
			const code = block.querySelector("code").textContent.trim(); // Usamos textContent y trim()
			navigator.clipboard.writeText(code).then(() => {
				button.innerHTML = "✅"; // Cambiar el ícono a un check
				setTimeout(() => {
					button.innerHTML = "📋"; // Restaurar el ícono después de 2 segundos
				}, 2000);
			});
		});
	});
}

// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", addCopyButtons);
