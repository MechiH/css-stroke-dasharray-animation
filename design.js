const logo=document.querySelectorAll("#logo path")

for (var i = 1; i < logo.length; i++) {
	console.log(logo[i].getTotalLength());
}