const R2_BUCKET = 'https://pub-e2c7382fb20d49c89a6f9a6dbf223dfc.r2.dev';
const isLocal = false;

const ShellClass = Object.freeze({
	BIVALVE: 'bivalve',
	UNIVALVE: 'univalve',
});

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
			console.log(`${prefix}/${this.rawLink}.jpg`)
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
					They came up in 2024 a week after hurricane Milton on Hutchinson Island (Chastain Beach).
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
				These came up in 2024 a week after hurricane Milton on Hutchinson Island (Chastain Beach).
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
				pearly-iridescent minis. All found on Cumberland Island.
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
				Essentially all were found on Hutchinson Island (the northern end of Bathtub Beach).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Candystick Tellin',
		scientificName: 'Scissula similis',
		standardSize: '25-32mm',
		images: [
			{
				link: 'candystick-tellin-scissula-similis',
				notes: `
				All were found on Cumberland Island.
				Due to their size and transparency, they are likely juveniles.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Florida Cross-barred Venus',
		scientificName: 'Chione elevata',
		standardSize: '15-33mm',
		recordSize: '45mm',
		images: [
			{
				link: 'cross-barred-venus-chione-elevata',
				notes: `
				Specimens found everywhere, but the bulk of the high quality doubles are from Seahorse Key Shoal (near Cedar Key).
				Perhaps it was because I had Covid at the time (and wasn't aware it was Covid),
				but I basically picked up every venus I saw because the insides were so pretty.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Cross-hatch Lucine',
		scientificName: 'Divaricella quadrisulcata',
		standardSize: '15-20mm',
		recordSize: '26mm',
		images: [
			{
				link: 'cross-hatched-lucine-divaricella-quadrisulcata',
				notes: `
				Specimens with the most staining were found on Amelia Island.
				The clean small-to-mid sized specimens found across Florida.
				The largest specimens were found across several back-to-back days at Lover's Key.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Lady-in-Waiting Venus',
		scientificName: 'Chionopsis intapurpurea',
		standardSize: '13-40mm',
		recorrdSize: '43mm',
		images: [
			{
				link: 'lady-in-waiting-venus-chionopsis-intapurpurea',
				notes: `
				Found primarily at Coral Cove Park (3-5),
				Hutchinson Island (5-7)
				and Sanibel (Blind Pass Beach) and Captiva (the majority).
				The biggest one I have is right on 51mm.
				It's another one I am guessing is gerontic because it's pure white
				(other than the standard brown next to the umbo)
				and the final bands are compressed significantly.
				It was either found on Captiva or Hutchinson.
				Given the other gerontic specimens I have, my money is on Hutchinson.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Dosinia-Like Lucine',
		scientificName: 'Callucina keenae',
		standardSize: '10-16mm',
		recordSize: '23mm according to Australia; may not be accurate for Florida',
		images: [
			{
				link: 'dosinia-like-luscine-callucina-keenae',
				notes: `
				Another white clam, but I feel good about the id.  All were found on Cumberland Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Pectinida',
		family: 'Anomiidae',
		commonName: 'Common Jingle',
		scientificName: 'Anomia simplex',
		standardSize: '25-50mm',
		recordSize: '75mm',
		images: [
			{
				link: 'common-jingle-anomia-simplex',
				notes: `Found all over Florida.`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Little Dove Strawberry Cockle',
		scientificName: 'Americardia collumbella',
		standardSize: '20-40mm',
		images: [
			{
				link: 'little-dove-strawberry-cockle-americardia-collumbella',
				notes: `
				Found on Sanibel (Blind Pass Beach) and Captiva.
				Confirmed as having peaked, triangular ribs
				(best example in lower right hand corner).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Cardiidae',
		commonName: 'Atlantic Strawberry Cockle',
		scientificName: 'Americardia media',
		standardSize: '20-35mm',
		images: [
			{
				link: 'atlantic-strawberry-cockle-americardia-merdia',
				notes: `
				Found on Coral Cove Beach.
				Confirmed as having flat, square ribs 
				(best example on the right).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Semelidae',
		commonName: 'White Atlantic Semele',
		scientificName: 'Semele proficua',
		standardSize: '15-38mm',
		images: [
			{
				link: 'white-atlantic-semele-semele-proficua',
				notes: `
					Found across florida.  Most heavily harvested from Fort Myers (Estero Island)
					and Marco Island (Tiger Tail). 
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Semelidae',
		commonName: 'Purplish Semele',
		scientificName: 'Semele purpurascens',
		standardSize: '15-38mm',
		images: [
			{
				link: 'purplish-semele-semele-purpurascens',
				notes: `
					A few were found in the Napels area (purple only), but most were picked up on Hutchinson Island (Chastain Beach and Frederick Douglas Memorial Park).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Imperial Venus',
		scientificName: 'Lirophora latilirata',
		standardSize: '25-35mm',
		recordSize: '38mm',
		images: [
			{
				link: 'imperial-venus-lirophora-latilirata',
				notes: `
				Sorted from least to most worn, left to right.
				Specimens found on Hutchinson Island (Chastain Beach and Frederick Douglas Memorial Park).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Lighting Pitar',
		scientificName: 'Pitar fulminatus',
		standardSize: '19-48mm',
		images: [
			{
				link: 'lightning-pitar-pitar-fulminatus',
				notes: `
				Specimens found on Hutchinson Island (Chastain Beach and Frederick Douglas Memorial Park).
				None were shiny.  All were worn and came in after Hurricane Milton.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Chalky Lucine',
		scientificName: 'Pegophysema schrammi',
		standardSize: '80-100mm',
		recordSizee: '110mm',
		images: [
			{
				link: 'chalky-lucine-pegophysema-schrammi',
				notes: `
				Found on Keeywadin (x1) and Shell Island/Second Chance Island (x4).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Littorinimorpha',
		family: 'Naticidae',
		commonName: 'Brown Baby Ear',
		scientificName: 'Sinum maculatum',
		standardSize: '20-35',
		recordSize: '40mm',
		images: [
			{
				link: 'brown-babys-ear-sinum-maculatum',
				notes: `
				Found on Sanibel (Blind pass Beach).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Littorinimorpha',
		family: 'Naticidae',
		commonName: 'White Baby Ear',
		scientificName: 'Sinum perspectivum',
		standardSize: '22-51mm',
		images: [
			{
				link: 'white-baby-ear-sinum-perspectivum',
				notes: `
				Found primarily on the east coast of Florida.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Speckled Tellin',
		scientificName: 'Tellinella listeri',
		standardSize: '50-75mm',
		recordSize: '100mm',
		images: [
			{
				link: 'speckled-tellin-tellinella-listeri',
				notes: `
				Found in the middle keys.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Mexican Tellin',
		scientificName: 'Tellinella mexicana',
		standardSize: '20-60mm',
		recordSize: '60mm',
		images: [
			{
				link: 'mexican-tellin-tellinella-mexicana',
				notes: `
				All found on Cumberland island.
				`,
			},
		],
	}),
	// new Shell({
	// 	class: ShellClass.BIVALVE,
	// 	order: '',
	// 	family: '',
	// 	commonName: '',
	// 	scientificName: '',
	// 	standardSize: '',
	// 	images: [
	// 		{
	// 			link: '',
	// 			notes: `
	// 			`,
	// 		},
	// 	],
	// }),
];
