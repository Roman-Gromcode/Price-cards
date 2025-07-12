async function loadCard(containerId, url) {
	const res = await fetch(url);
	const html = await res.text();
	document.getElementById(containerId).insertAdjacentHTML('beforeend', html);
}

window.addEventListener('DOMContentLoaded', () => {
	loadCard('cards-container', 'card1.html');
	loadCard('cards-container', 'card2.html');
	loadCard('cards-container', 'card3.html');
});
