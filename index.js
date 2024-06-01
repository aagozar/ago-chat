document.addEventListener("DOMContentLoaded", () => {
	console.log("Hello World!");

	document.getElementById("main-form").addEventListener("submit", (e) => {
		e.preventDefault();
		const message = document.getElementById("message-input").value;
		const messageElement = document.createElement("div");
		messageElement.classList.add("chat-bubble");
		messageElement.classList.add("m-1");
		messageElement.textContent = message;
		document
			.getElementById("messages-container")
			.appendChild(messageElement);

		document.getElementById("message-input").value = "";

		setTimeout(() => {
			messageElement.remove(); // Remove the message after 5 seconds.
		}, 7000);

		console.log("hello");
	});
});
