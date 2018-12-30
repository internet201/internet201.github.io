function main() {
	pop_up_window = document.querySelector(".popup");
	pop_up_window.addEventListener("click", pop_up);
}

function pop_up() {
	window.open("index.html", "_blank", "location=0");
}

main();