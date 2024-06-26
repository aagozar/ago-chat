document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World!");

	document.getElementById("main-form").addEventListener("submit", (e) => {
		e.preventDefault();
		const message = document.getElementById("message-input").value;

		if (message === "") {
			return;
		}

		const messageElement = document.createElement("div");
		messageElement.classList.add("messageElement");
		messageElement.classList.add("m-1");
		messageElement.classList.add("bg-gray-200");
		messageElement.classList.add("w-fit");
		messageElement.classList.add("px-3");
		messageElement.classList.add("py-1");
		messageElement.classList.add("rounded-full");
		messageElement.textContent = message;
		document
			.getElementById("messages-container")
			.appendChild(messageElement);

		document.getElementById("message-input").value = "";

		setTimeout(() => {
			messageElement.style.opacity = 0;
			//messageElement.remove(); // Remove the message after 5 seconds.
		}, 15000);
	});
});
