// Hub page helpers
document.addEventListener('DOMContentLoaded', function () {
	// Track clicks (lightweight) and ensure anchors behave on keyboard activation
	document.querySelectorAll('.hub-card').forEach(function (card) {
		card.addEventListener('click', function (e) {
			var project = card.dataset.project || card.getAttribute('href');
			// Optional analytics hook (no external analytics added)
			try { if (window.ga) window.ga('send','event','hub','open', project); } catch (err) {}
			console.log('Hub: opening', project);
			// default anchor navigation will follow
		});
	});
});

