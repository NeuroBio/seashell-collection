const R2_BUCKET = 'https://pub-e2c7382fb20d49c89a6f9a6dbf223dfc.r2.dev';

const ShellType = Object.freeze({
	BIVALVE: 'bivalve',
	UNIVALVE: 'univalve',
});

const OptionalTextType = Object.freeze([
	'standard_size',
	'record_size',
	'notes',
]);


const FIRST_LINK = 'atlantic-calico-scallop-argopecten-gibbus.jpg';

class Image {
	constructor (params) {
		this.link = params.link;
		this.notes = params.notes;
		this.standard_size = params.standardSize;
		this.record_size = params.recordSize;
	}
}
class Shell {	
	constructor (params) {
		this.type = params.type;
		this.commonName = params.commonName;
		this.scientificName = params.scientificName;
		this.images = params.images.map((i) => new Image(i));
	}

	get commonHeader () {
		return `${this.commonName} (<i>${this.scientificName}</i>)`;
	}

	get scientificHeader () {
		return `<i>${this.scientificName}</i> (${this.commonName})`;
	}

	get id () {
		return this.scientificName.split(' ').join('-');
	}
}

const ShellList = [
	new Shell({
		type: ShellType.BIVALVE,
		commonName: 'Ravanel\'s Egg Cockle',
		scientificName: 'Laevicardium pictum',
		images: [
			{
				link: '../test-image2.jpg',
				notes: 'not live yet',
				standardSize: '15-27 mm',
			},
		],
	}),
	new Shell({
		type: ShellType.BIVALVE,
		commonName: 'Atlantic Calico Scallop',
		scientificName: 'Argopecten gibbus',
		images: [
			{
				link: '../test-image.jpg',
			},
		],
	}),
];
