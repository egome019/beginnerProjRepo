// pick the unique class
const closedFaced = document.querySelector(".closed");
const openFace = document.querySelector(".open");

// add eventListener
closedFaced.addEventListener("click", () => {
	if (openFace.classList.contains("open")) {
		openFace.classList.add("active");
		closedFaced.classList.remove("active");
	}
});

openFace.addEventListener("click", () => {
	if (closedFaced.classList.contains("closed")) {
		closedFaced.classList.add("active");
		openFace.classList.remove("active");
	}
});
