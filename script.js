// Update the modal and display
function openModal(el) {
	// get img to show
	var img = el;
	// Grab the modal
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("modal-img");

	// update modal img
	modalImg.src = img.src;
	// update modal
	modal.style.display = "block";
}