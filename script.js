function update(inputText) {
	console.log(inputText);
	updateTable(inputText);
	// wxile (x<=text)
}

function updateTable(text) {
	p = document.querySelector('#p1');
	const L = 260;
	const EndOfCell = [' ', '.', ','];
	let x = 0,
		err = 0,
		cell = 0;
	// err<500
	while (x < text.length) {
		const lengthOfDirtySubstring = x + L;
		let substr = text.substring(x, lengthOfDirtySubstring);
		if (substr[0] === ' ') {
			x++;
			substr.substring(1, substr.length);
		}

		// String fits in cell?
		const isGoodString = EndOfCell.includes(substr[substr.length - 1]);
		let new_substr = '';

		// Modify string to fits in cell
		if (!isGoodString) {
			// Find position for this interval of char
			const space = substr.lastIndexOf(' ');
			const dot = substr.lastIndexOf('.');
			const comma = substr.lastIndexOf(',');
			const maxPosition = [space, dot, comma].sort()[2];

			// Modify string
			// Create
			if (maxPosition > -1) {
				new_substr = substr.substring(0, maxPosition);

				// Move the x
				x += maxPosition;
			} else {
				new_substr = substr;
				x++;
				//console.warn('Bad 1');
			}
		} else {
			new_substr = substr;
			x += L; // x+=L
			//console.warn('Bad 2');
		}
		// Afisam sirurile
		// console.log(substr, '-', isGoodString);
		// console.log(new_substr, '- yes');

		//console.error('new X:', x);
		//err++;
		const rowID = Math.floor(cell / 3);
		const row = cell % 3;

		const tableID = Math.floor(cell / 24);
		const table = cell % 24;
		if (table == 0) addNewPageWithTable(tableID);

		if (row == 0) addRow(rowID, tableID);
		addCellWithContent(new_substr, cell, rowID);
		cell++;
	}
}

function addCellWithContent(text, cellID, rowID) {
	const row = document.querySelector(`#row${rowID}`);
	row.innerHTML += `<td id=cell${cellID}>${text}</td>`;
}

function addRow(rowID, tableID = 0) {
	const table = document.querySelector(`#table${tableID}`);
	table.innerHTML += `<tr id=row${rowID}></tr>`;
}

function addNewPageWithTable(id) {
	body = document.querySelector('#body');
	body.innerHTML += `<page size="A4" id=page${id}><table id=table${id}></table></page>`;
}
