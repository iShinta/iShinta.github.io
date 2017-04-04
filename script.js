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

// sorts a table
// needs the tableID and column to be sorted (an int)
function sortTable(tableID, columnIndex) {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById(tableID);
	switching = true;

	//loop until no row has been switched
	while (switching) {
	//start by saying no switching is done
	switching = false;
	rows = table.getElementsByTagName("TR");

	//loop through the table rows
	for (i = 1; i < (rows.length - 1); i++) {
		//start by saying there should be no switching:
		shouldSwitch = false;

		//get the two elements you want to compare
		x = rows[i].getElementsByTagName("TD")[columnIndex];
		y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
		
		//check if the two rows should switch place
		// ignore case when comparing
		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			//if so, mark as a switch and break
			shouldSwitch= true;
			break;
		}
	}

	if (shouldSwitch) {
		// if a switch has been marked, make the switch and continue the loop
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		}
	}
}