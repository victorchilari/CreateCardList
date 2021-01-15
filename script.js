function update(inputText) {
	console.log(inputText);
	inputText = `Item 1 
1.	O întrebare simplă despre pachetele de date de la diferite nivele ale suitei
Nivelul fizic Putem spune că nivelul fizic este responsabil de transportarea biților unui cadru (frame) de-a lungul link-ului. Deși nivelul fizic este cel mai de jos nivel din suita de protocoale TCP/IP, comunicarea între două dispozitive la nivelul fizic este încă o comunicare logică deoarece sub nivelul fizic există un alt nivel ascuns, mediul de transmisie. Două dispozitive sunt conectate printr-un mediu de transmisie (cablu sau aer). Trebuie să știm că mediul de transmisie nu transportă biți; acesta transmite semnale electrice sau optice. Deci biții primiți într-un cadru (frame) de la nivelul legătură de date sunt transformați și trimiși prin mediul de transmisie, dar putem crede că unitatea logică de la nivelul fizic al celor două dispozitive este un bit. 

Nivelul legătură de date TCP/IP nu definește protocoale specifice pentru nivelul legătură de date. Modelul acceptă toate protocoalele standard și de tip proprietar. Orice protocol care poate prelua o datagramă și să o transporte printr-un link, este suficient pentru nivelul legătură de date.  Nivelul legătură de date preia o datagramă și o încapsulează într-un pachet numit cadru (frame).  Protocoalele de la nivelul legătură de date pot oferi servicii diferite. Unele protocoale de la acest nivel asigură detectarea și corectarea completă a erorilor, altele realizează numai detectarea erorilor.

Nivelul rețea Nivelul rețea din Internet include protocolul principal, Internet Protocol (IP), care definește formatul pachetului la nivelul rețea, numit datagramă. Protocolul IP definește, de asemenea, formatul și structura adreselor utilizate la acest nivel. De asemenea, IP este responsabil pentru dirijarea unui pachet de la sursă la destinație, lucru realizat prin intermediul routerelor, fiecare dintre care trimite datagrama către următorul router din calea sa.  IP este un protocol fără conexiune (connectionless) care nu oferă vreun control al fluxului sau al erorilor și nici servicii de control al congestiei (aglomerării). Aceasta înseamnă că, în cazul în care oricare dintre aceste servicii este necesar pentru o aplicație, aplicația ar trebui să se bazeze doar pe protocolul de nivel transport.

Nivelul transport. Conexiunea logică la nivelul transport este de asemenea de tip end-to-end. Nivelul de transport de la host-ul sursă preia mesajul de la nivelul aplicație, îl încapsulează într-un pachet de la nivelul transport (numit segment sau user datagramă în diferite protocoale) și îl trimite, prin conexiunea logică (imaginară), la nivelul transport de la host-ul destinație. Cu alte cuvinte, nivelul transport este responsabil de furnizarea serviciilor către nivelul aplicație: să primească un mesaj de la un program de aplicație care rulează pe hostul sursă și să-l livreze la programul de aplicație corespunzător de la host-ul destinație.
Nivelul aplicație Conexiunea logică între cele două nivele de aplicație este end-to-end. Cele două nivele de aplicație interschimbă mesaje între ele, ca și cum ar exista o punte între cele două nivele. În realitate comunicarea se face prin parcurgerea tuturor nivelelor. 

2.	 Un punct despre funcționalitățile de bază ale hub-ului, switch-ului și router-ului și o comparație a acestora (adrese MAC, adrese IP, nivelele implicate)
Hub este un dispozitiv într-o rețea, pachetul de date dintr-un port este trimis către toate celelalte porturi din rețea. Pachetul de date trece printr-un hub. Hub transmite pachetul de date la destinație. Hub-urile sunt de obicei utilizate în rețele mici în care transmisia de date nu este niciodată mare.

Un switch decodează cadrul antetului pentru a nu trimite acest lucru la portul Ethernet combinat, ceea ce reduce traficul pe toate cablurile de rețea de la un HUB care returnează date pe toate porturile, reducând lățimea de bandă provocând astfel mai mult decât simple coliziuni. Fiecare switch folosește un tabel de adresă de corespondență MAC - numărul conexiunii și o adresă IP. Calculatoarele folosesc un tabel de corespondență ARP, cu comanda DOS ARP a sistemelor de operare care include potrivirea MAC - IP.

Un router are mai multe interfețe și primește pachete de date prin ele. Evaluează adresele de rețea ale pachetelor primite și decide către ce interfață să redirecționeze pachetul. Acesta își folosește tabelul de rutare locală pentru luarea deciziilor. Acest lucru poate fi configurat static sau calculat prin protocoale de rutare dinamică, cum ar fi OSPF sau BGP.
HUB	SWITCH
Informațiile trimise de un computer către altul (sau o imprimantă) sunt trimise către toate computerele care decodează informații pentru a ști dacă sunt destinate.	Informațiile trimise de un computer către altul sunt transmise numai către destinatar. Dacă un alt computer trimite informații către imprimantă, cele două comunicații pot fi astfel realizate simultan.
`;
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
			const arrEnd = [space, dot, comma];
			arrEnd.sort();
			if (cell < 20) {
				console.warn(cell);
				console.table(arrEnd);
			}
			// const END = arrEnd[1] > arrEnd[2] ? arrEnd[2] : arrEnd[1];
			// const maxPosition = END;
			const maxPosition = arrEnd[2];

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
