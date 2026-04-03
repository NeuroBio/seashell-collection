const R2_BUCKET = 'https://pub-e2c7382fb20d49c89a6f9a6dbf223dfc.r2.dev';
const isLocal = true;

const ShellClass = Object.freeze({
	BIVALVE: 'bivalve',
	UNIVALVE: 'univalve',
});

const OptionalTextType = Object.freeze([
	'notes',
]);

class Image {
	constructor (params) {
		this.rawLink = params.link;
		this.notes = params.notes;
		this.standard_size = params.standardSize;
		this.record_size = params.recordSize;
		this.class = params.class;
	}

	get link () {
		const prefix = isLocal
			? '../local-images'
			: `${R2_BUCKET}/${this.class}`;
		return `${prefix}/${this.rawLink}.jpg`;
	}
}
class Shell {	
	constructor (params) {
		this.class = params.class;
		this.order = params.order;
		this.family = params.family;
		this.standardSize = params.standardSize;
		this.recordSize = params.recordSize;

		this.commonName = params.commonName;
		this.scientificName = params.scientificName;
		this.images = params.images.map((i) => new Image({
			...i,
			class: this.class,
		}));
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
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Ravanel\'s Egg Cockle',
		scientificName: 'Laevicardium pictum',
		standardSize: '15-27 mm',
		images: [
			{
				link: 'ravanels-egg-cockle-laevicardium-pictum',
				notes: `Container dimensions: 172mm x 89mm. Primarily found on Sanibel and Captiva.`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Pectinida',
		family: 'Pectinidae',
		commonName: 'Atlantic Calico Scallop',
		scientificName: 'Argopecten gibbus',
		standardSize: '24-60mm',
		recordSize: '80mm',
		images: [
			{
				link: 'atlantic-calico-scallop-argopecten-gibbus',
				notes: ``,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Common Egg Cockle',
		scientificName: 'Laevicardium serratum',
		standardSize: 'up to 50mm (pending clearer research on serratum versus angmagsalikense)',
		images: [
			{
				link: 'common-egg-cockle-laevicardium-serratum',
				notes: `
					It's possible that some or all specimens are Laevicardium angmagsalikense.
					I cannot figure out how to tell them apart.
					I have 4 specimens that are near or over 64mm, but be aware: these are likely gerontic specimens.
					They came up in 2024 a week after hurricane Milton on Hutchinson's Island.
					The smallest white and yellow specimens are from the middle keys.
					The mid-sized ones are from the Tampa and Palm Coast areas.
				`,
			},
		],
	}),
];
