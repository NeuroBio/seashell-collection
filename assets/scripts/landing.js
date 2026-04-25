const SortType = Object.freeze({
	COMMON: 'common',
	SCIENTIFIC: 'scientific'
});

const test = d3.select('#test');
const link = '../test-image.jpg'
test.attr(`src`, link);

const bivalveListing = d3.select('#bivalves');
const univalveListing = d3.select('#univalves');
const shellsById = ShellList.reduce((byId, shell) => {
	byId[shell.id] = shell;
	return byId;
}, {});

ShellList.forEach((shell) => createAccordion(shell));
sortBy(SortType.COMMON);

// Construction Behavior
function createAccordion (shell) {
	const listing = shell.class === ShellClass.BIVALVE ? bivalveListing : univalveListing;

	const article = listing.append('article')
		.attr('class', 'shell-listing is-closed')
		.attr('id', shell.id);

	const header = article.append('section')
		.attr('class', 'accordion-header');
	header.append('button')
		.attr('class', 'accordion-icon open')
		.attr('type', 'button')
		.attr('aria-label', 'toggle shell visibility')
		.on('click', toggleShell);
	header.append('h4').html(shell.commonHeader);


	const body = article.append('section')
		.attr('class', 'accordion-body');

	shell.images.forEach((image, i) => {
		const section = body.append('section')
			.attr('class', 'specimen-entry')
		const container = section.append('div')
			.attr('class', 'specimen-container')
		container.append('img')
			.attr('class', 'specimen')
			.attr('src', '')
			.attr('data-src', image.link); 
		const info = section.append('section').attr('class', 'specimen-text');
		if (i === 0) {
			if (shell.standardSize) {
				addTextSection(info, 'Expected Size', shell.standardSize);
			}
			if (shell.recordSize) {
				addTextSection(info, 'Reported Max Size', shell.recordSize);
			}
			if(shell.idNotes) {
				addTextSection(info, 'Identification Notes', shell.idNotes);
			}
		}

		const text = image.notes;
		if (text) {
			addTextSection(info, 'Specimen Notes', text);
		}

		const lastHr = d3.selectAll('hr').nodes();
		d3.select(lastHr[lastHr.length - 1])?.remove();
	});

	function addTextSection (info, label, text) {
		const container = info.append('p');
		const finalLabel = label.split('_')
			.map((fragment) => fragment.charAt(0).toUpperCase() + fragment.slice(1))
			.join(' ');

		container.append('span')
			.attr('class', 'label')
			.text(`${finalLabel}: `);
		container.append('span')
			.text(text);

		info.append('hr');
	}
}


//  Live Behavior
function sortBy (type) {
	const isScientific = type === SortType.SCIENTIFIC;
	const commonButton = d3.select('#sort-by-common');
	const scientificButton = d3.select('#sort-by-scientific');

	if (isScientific) {
		commonButton.classed('active-toggle', false);
		scientificButton.classed('active-toggle', true);
	} else  {
		commonButton.classed('active-toggle', true);
		scientificButton.classed('active-toggle', false);
	}

	d3.selectAll('.shell-listing-container').each((_, i, nodes) => {
		const entries = d3.select(nodes[i])
			.selectAll('.shell-listing')
			.datum((d, i, nodes) => shellsById[nodes[i].id]);
		entries.sort((a, b) => shellSorter(a, b, isScientific));
		entries.select('h4').html((shell) => isScientific ? shell.scientificHeader : shell.commonHeader);
	});
	applyOrderHeaders();


	function shellSorter (a, b, isScientific) {
		return a.order.localeCompare(b.order) || 
			a.family.localeCompare(b.family) || 
			(isScientific ? a.scientificName.localeCompare(b.scientificName) : a.commonName.localeCompare(b.commonName));
	};
	
	function applyOrderHeaders () {
		d3.selectAll('.order-divider').remove();

		d3.selectAll('.shell-listing-container').each((_, i, listNodes) => {
			const container = d3.select(listNodes[i]);
			const entries = container.selectAll('.shell-listing');
			
			let lastOrder;
			entries.each((shell, j, nodes) => {
				if (shell.order !== lastOrder) {
					const currentNode = nodes[j];
					
					d3.select(currentNode.parentNode)
						.insert('h3', () => currentNode)
						.attr('class', 'order-divider')
						.text(shell.order);

					lastOrder = shell.order;
				}
			});
		});
	}
}

function toggleShell () {
	const article = d3.select(this.closest('.shell-listing'));
	article.classed('is-closed')
		? openShell(article)
		: closeShell(article);
}

function openAll () {
	d3.selectAll('.shell-listing').each((d, i, nodes) =>
		openShell(d3.select( nodes[i])));
}

function openShell (article) {
	article.classed('is-closed', false);
	article.classed('is-open', true);
	const specimens = article.selectAll('.specimen').nodes();

	specimens.forEach((specimen) => {
			if (specimen.getAttribute('src') === '') {
			specimen.setAttribute('src', specimen.getAttribute('data-src'));
		}

			if (specimen.complete) {
			initMagnifier(specimen); // see magnifier.js
		} else {
			specimen.onload = () => initMagnifier(specimen);
		}
	});
}

function closeShell (article) {
	article.classed('is-closed', true);
	article.classed('is-open', false);
}

