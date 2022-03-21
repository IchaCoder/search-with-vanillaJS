/** @format */

const article = document.querySelector("article");
const input = document.querySelector("input");
const url = "https://anime-facts-rest-api.herokuapp.com/api/v1";
let names = [];

const renderList = (list) => {
	const mappedList = list
		.map((name) => {
			return `
      <div>${name.anime_name}</div>
    `;
		})
		.join("");
	article.innerHTML = mappedList;
};

const handleOnChange = async () => {
	// filtering the list to get the array as user is entering a value
	const filteredNames = names.filter((name) => {
		return name.anime_name.includes(input.value);
	});
	names = filteredNames;
	console.log(names);
	renderList(names);
};

input.addEventListener("input", handleOnChange);
window.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(url);
	const { data } = await response.json();
	names = data;

	renderList(names);
});
