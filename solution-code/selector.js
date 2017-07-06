function selector(selectString) {
	var foundItem;
	if (selectString[0] === "#") {
		foundItem = document.getElementById(selectString.slice(1,selectString.length));
	} else if (selectString[0] === ".") {
		foundItem = document.getElementsByClassName(selectString.slice(1,selectString.length));
	} else {
		foundItem = document.getElementsByTagName(selectString);
	}
	return foundItem;
}

var selectedByTag = selector("h1");
console.log(selectedByTag);

var selectedByClass = selector(".box");
console.log(selectedByClass);

var selectedById = selector("#lastBox");
console.log(selectedById);