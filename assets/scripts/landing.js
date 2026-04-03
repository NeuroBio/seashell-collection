const SortType = Object.freeze({
	COMMON: 'common',
	SCIENTIFIC: 'scientific'
});

const test = d3.select('#test');
// const link = `${R2_BUCKET}/${Bucket.BIVALVE}/${FIRST_LINK}`
const link = '../test-image.jpg'
test.attr(`src`, link);

const bivalveListing = d3.select('#bivalves');
const univalveListing = d3.select('#univalves');
ShellList.forEach((shell) => createAccordion(shell));

// Construction Behavior
function createAccordion (shell) {
	const listing = shell.type === ShellType.BIVALVE ? bivalveListing : univalveListing;

	const article = listing.append('article')
		.attr('class', 'shell-listing is-closed')
		.attr('id', shell.id);

	const header = article.append('section')
		.attr('class', 'accordion-header');
	header.append('h3').html(shell.commonHeader);
	header.append('button')
		.attr('class', 'accordion-icon open')
		.attr('type', 'button')
		.attr('aria-label', 'toggle shell visibility')
		.on('click', toggleShell);

	const body = article.append('section')
		.attr('class', 'accordion-body collapsed');
	body.append('img')
		.attr('class', 'specimen')
		.attr('src', shell.images[0].link)
	const info = body.append('section');
		info.append('div').text(shell.images[0].notes);

}


//  Live Behavior
function sortBy (type) {
	const commonButton = d3.select('#sort-by-common');
	const scientificButton = d3.select('#sort-by-scientific');

	if (type === SortType.SCIENTIFIC) {
		commonButton.classed('active-toggle', false);
		scientificButton.classed('active-toggle', true);
	} else  {
		commonButton.classed('active-toggle', true);
		scientificButton.classed('active-toggle', false);
	}
}

function toggleShell (shellId) {
	// const article = d3.select(`#${shellId}`);
	const article = d3.select(this.closest('.shell-listing'));
	article.classed('is-closed')
		? openShell(article)
		: closeShell(article);

	function openShell (article) {
		article.classed('is-closed', false);
		article.classed('is-open', true);	
	}

	function closeShell (article) {
		article.classed('is-closed', true);
		article.classed('is-open', false);
	}
}

