const SortType = Object.freeze({
	COMMON: 'common',
	SCIENTIFIC: 'scientific'
});

const test = d3.select('#test');
// const link = `${R2_BUCKET}/${Bucket.BIVALVE}/${FIRST_LINK}`
const link = '../test-image.jpg'
test.attr(`src`, link);

//  Sort
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
	const article = d3.select(`#${shellId}`);
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

