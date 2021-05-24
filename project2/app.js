let data = [
	{
		name: "Joe",
		age: "21",
	},
	{
		name: "John",
		age: "21",
	},
	{
		name: "Jim",
		age: "21",
	},
	{
		name: "Bob",
		age: "43",
	},
	{
		name: "Jess",
		age: "27",
	},
	{
		name: "Jane",
		age: "25",
	},
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
	return (
		"<div class = 'card'>" + item.name + " " + "Age: " + item.age + "</div>"
	);
});

info.innerHTML = details.join("\n");
