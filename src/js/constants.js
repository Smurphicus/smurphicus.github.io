document.addEventListener("DOMContentLoaded", function() {
    fetch('src/common/navbar.html')
				.then(response => response.text())
				.then(data => {
					document.getElementById('navbar').innerHTML = data;
				})
				.catch(error => {
					console.error('Error fetching navbar:', error);
				});
});