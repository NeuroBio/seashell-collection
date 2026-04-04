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
		commonName: 'Ravenel\'s Egg Cockle',
		scientificName: 'Laevicardium pictum',
		standardSize: '15-27 mm',
		images: [
			{
				link: 'ravenels-egg-cockle-laevicardium-pictum',
				notes: `Found on Sanibel (Blind Pass Beach) and Captiva.`,
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
					They came up in 2024 a week after hurricane Milton on Hutchinson's Island (Chastain Beach).
					The smallest white and yellow specimens are from the middle keys.
					The mid-sized ones are from the Naples and Palm Coast areas.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Morton\'s Egg Cockle',
		scientificName: 'Laevicardium mortoni',
		standardSize: '10-25mm',
		images: [
			{
				link: 'mortons-egg-cockle-laevicardium-mortoni',
				notes: `Found on Sanibel (Blind Pass Beach) and Captiva.`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Florida Prickly Cockle',
		scientificName: 'Trachycardium egmontianum',
		standardSize: '25-45mm',
		recordSize: '67mm',
		images: [
			{
				link: 'florida-pickly-cockle-trachycardium-egmontianum',
				notes: `My standard sized ones.  Found on Fort Myers (Estero Island), Marco Island (Tiger Tail Beach), Atsena Otie, ect.`,
			},
			{
				link: 'florida-pickly-cockle-trachycardium-egmontianum-the-big-ones',
				notes: `
				These came up in 2024 a week after hurricane Milton on Hutchinson's Island (Chastain Beach).
				The yellow variant is fresh and sharp.  It's a large but otherwise standard specimen.
				The rest have very thick spikes.
				They are likely gerontic specimens.  The largest is 89mm but worn.
				I positioned its most prominent spikes forward for comparison with others
				in the same position.
				There are scars where the spikes should have been on the other side.
				Others are in various positions to show how the thick spikes
				and wear patterns look on these large specimens.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Yellow Prickly Cockle',
		scientificName: 'Dallocardia muricata',
		standardSize: '35-50mm',
		images: [
			{
				link: 'yellow-prickly-cockle-dallocardia-muricata',
				notes: `
				Found on Fort Myers (Estero Island), Lover's Key, Marco Island (Tiger Tail Beach), Keewaydin, Sanibel (Blind Pass Beach), ect.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Semelidae',
		commonName: 'Common Atlantic Abra',
		scientificName: 'Abra aequalis',
		standardSize: '6-7mm',
		images: [
			{
				link: 'common-atlantic-abra-abra-aequalis',
				notes: `
				Little white clams are hard, but this is my best guess for these non-transparent,
				iridescent like pearls minis. All found on Cumberland Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Donacidae',
		commonName: 'Giant False Donax',
		scientificName: 'Iphigenia brasiliensis',
		standardSize: '19-60mm',
		recordSize: '75mm',
		images: [
			{
				link: 'giant-false-donax-iphigenia-brasiliensis',
				notes: `
				Essentially all were found on Hutchinson's Island (the northern end of Bathtub Beach).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: '',
		family: '',
		commonName: '',
		scientificName: '',
		standardSize: '',
		images: [
			{
				link: '',
				notes: `
				`,
			},
		],
	}),
];
