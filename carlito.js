function createButton(title) {
	var button = document.createElement("a")
	button.innerText = title
	button.className = "btn btn-sm"

	return button
}

function appendItem(title, url) {
	var navigateButton = createButton(title)
	navigateButton.href = url
	var element = document.createElement("li")
	element.appendChild(navigateButton)

	document
		.querySelector(".repohead-details-container .pagehead-actions")
		.appendChild(element);
}

var platform = window.location.pathname.split("-").pop()
if (["ios", "android"].indexOf(platform) >= 0) {
	appendItem("Go to core", window.location.href.replace(/(ios|android)$/, "core"))
} else if (platform == "core") {
	appendItem("Go to iOS", window.location.href.replace(/core$/, "ios"))
	appendItem("Go to Android", window.location.href.replace(/core$/, "android"))
}