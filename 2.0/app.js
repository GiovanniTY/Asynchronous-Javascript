const button = document.querySelector('button');
const section = document.querySelector('section');

button.addEventListener('click', () => {
 const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

 fetchName("michael")
 .then((response) => response.json())
 .then((json) => {
     const div = document.createElement("div");
     const ageParagraph = document.createElement("p");
     ageParagraph.textContent = "Age: " + json.age;
     div.appendChild(ageParagraph);
     section.appendChild(div);
 })
 .catch((error) => {
     console.log("There was an error!", error);
 });
});

    