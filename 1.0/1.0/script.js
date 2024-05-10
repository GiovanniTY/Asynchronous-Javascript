
const button = document.querySelector("button");
const ul = document.querySelector("#unique");

button.addEventListener('click', () => {
    ul.innerHTML= "";
    fetch("file.json")
	.then((response) => response.json())
	.then((text) => {
        text.users.forEach(element => {
        const li = document.createElement("li");
		li.textContent = element;
		ul.appendChild(li);
        });
		
	});
	});