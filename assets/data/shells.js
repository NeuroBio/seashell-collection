const R2_BUCKET = 'https://pub-e2c7382fb20d49c89a6f9a6dbf223dfc.r2.dev';

const ShellType = Object.freeze({
	BIVALVE: 'bivalve',
	UNIVALVE: 'univalve',
});


const FIRST_LINK = 'atlantic-calico-scallop-argopecten-gibbus.jpg';

class Image {
	constructor (params) {
		this.link = params.link;
		this.notes = params.notes;
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
			new Image({
				link: '../test-image2.jpg',
				notes: 'not live yet',
			}),
		],
	}),
	new Shell({
		type: ShellType.BIVALVE,
		commonName: 'Atlantic Calico Scallop',
		scientificName: 'Argopecten gibbus',
		images: [
			new Image({
				link: '../test-image.jpg',
			}),
		],
	}),
];
