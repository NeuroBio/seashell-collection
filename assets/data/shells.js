const R2_BUCKET = 'https://pub-e2c7382fb20d49c89a6f9a6dbf223dfc.r2.dev';
const isLocal = window.location.protocol === 'file:';

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
				All the small ones were found on Cumberland Island.
				Due to their size and transparency, they are likely juveniles.
				The larger shell was found (I think) on the Gulf Coast.
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
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Buttercup Lucine ',
		scientificName: 'Anodontia alba',
		standardSize: '35-53mm',
		recordSize: '64mm',
		images: [
			{
				link: 'buttercup-lucine-anodontia-alba',
				notes: `
				Mostly found on Marco Island (Tiger Tail), Keewaydin, and Fort Myers (Estero Island).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Tiger Lucine',
		scientificName: 'Codakia orbicularis',
		standardSize: '60-75mm',
		recordSize: '98mm',
		images: [
			{
				link: 'tiger-lucine-codakia-orbicularis',
				notes: `
				Found in the middle keys.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Thick Lucine',
		scientificName: 'Phacoides pectinatus',
		standardSize: '50-60mm',
		recordSize: '66mm',
		images: [
			{
				link: 'thick-lucine-phacoides-pectinatus',
				notes: `
				Found on Keewaydin.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Pennsylvania Lucine',
		scientificName: 'Lucina pensylvanica',
		standardSize: '38-52mm',
		images: [
			{
				link: 'pennsylvania-lucine-lucina-pensylvanica',
				notes: `
				I don't remember where I found these.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Rose Petal Tellin',
		scientificName: 'Eurytellina lineata',
		standardSize: '25-32mm',
		recordSize: '38mm',
		images: [
			{
				link: 'rose-petal-tellin-eurytellina-lineata',
				notes: `
				Largely found on Marco Island (Tiger Tail)
				and Fort Myers (Estero Island).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Alternate Tellin',
		scientificName: 'Eurytellina alternata',
		standardSize: '40-58mm',
		recordSize: '76mm',
		images: [
			{
				link: 'alternate-tellin-eurytellina-alternata',
				notes: `
				Many found on Cumberland Island, others on Fort Myers (Estero Island).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Psammobiidae',
		commonName: 'Gaudy Asaphis',
		scientificName: 'Asaphis deflorata',
		standardSize: '30-70mm',
		recordSize: '78mm',
		images: [
			{
				link: 'gaudy-asaphis-asaphis-deflorata',
				notes: `
				All found in the rocks under the mangroves at Phil Foster Park.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Mactridae',
		commonName: 'Southern Surf Clam',
		scientificName: 'Spisula solidissima similis',
		standardSize: '50-100',
		recordSize: '122mm',
		images: [
			{
				link: 'southern-surf-clam-spisula-solidissima-similis',
				notes: `
				Found on disparate beaches.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Sunrise Tellin',
		scientificName: 'Tellina radiata',
		standardSize: '60-85mm',
		recordSize: '105mm',
		images: [
			{
				link: 'sunrise-tellin-tellina-radiata',
				notes: `
				This shell chose me.
				It rolled up at my feet on a wav while walking back from a long walk in the middle keys.
				I had to chase it to get it into my hot little hands.
				My dad, who was several steps ahead, informed me that the sea gods meant for him to have it.
				I was a terrible child and did not give it to him.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Disk Dosinia',
		scientificName: 'Dosinia discus',
		standardSize: '42-76mm',
		images: [
			{
				link: 'disk-dosinia-dosinia-discus',
				notes: `
				Best specimens found at Huguenot Memorial Park.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Mactridae',
		commonName: 'Fragile Surf Clam',
		scientificName: 'Mactrotoma fragilis',
		standardSize: '45-49mm',
		recordSize: '90mm',
		images: [
			{
				link: 'fragile-surf-clam-mactrotoma-fragilis',
				notes: `
				Found on Hutchinson Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Calico Clam',
		scientificName: 'Megapitaria maculata',
		standardSize: '40-75mm',
		recordSize: '80mm',
		images: [
			{
				link: 'calico-clam-megapitaria-maculata',
				notes: `
				Largely found on Marco Island (Tiger Tail) and Fort Myers (Estero Island).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Chamidae',
		commonName: 'Cherry Jewel Box',
		scientificName: 'Chama sarda',
		standardSize: '23-25mm',
		recordSize: '38mm',
		images: [
			{
				link: 'cherry-jewel-box-chama-sarda',
				notes: `
				Found in the middle keys.  Likely a bottom valve.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Carditida',
		family: 'Crassatellidae',
		commonName: 'Beautiful Crassatella',
		scientificName: 'Kalolophus speciosus',
		standardSize: '25-50mm',
		recordSize: '63mm',
		images: [
			{
				link: 'beautiful-crassatella-kalolophus-speciosus',
				notes: `
				Found on Sanibel (Blind Pass Beach).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Mactridae',
		commonName: 'Dwarf Surf Clam',
		scientificName: 'Mulinia lateralis',
		standardSize: '10-20mm',
		images: [
			{
				link: 'dwarf-surf-clam-mulinia-lateralis',
				notes: `
				Found on Cumberland island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Limida',
		family: 'Limidae',
		commonName: 'Spiny Fileclam',
		scientificName: 'Lima caribaea',
		standardSize: '20-30mm',
		recordSize: '40mm',
		images: [
			{
				link: 'spiny-fileclam-lima-caribaea',
				notes: `
				Found at different times in different places in Florida.
				Pink discoloration on the largest specimen is sponge.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Tellinidae',
		commonName: 'Elongated Macoma',
		scientificName: 'Macoploma tenta',
		standardSize: '18-20mm',
		recordSize: '25mm',
		images: [
			{
				link: 'elongated-macoma-macoploma-tenta',
				notes: `
				Found on Cumberland Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Cardiida',
		family: 'Semelidae',
		commonName: 'Cancellate Semele',
		scientificName: 'Semele bellastriata',
		standardSize: '12-20mm',
		recordSize: '24mm',
		images: [
			{
				link: 'cancellate-semele- semele-bellastriata',
				notes: `
				I do not remember where I found this one.
				I just remember it was when I was giving
				my mom all the paper cockles I found and I
				kept this one because it looked different.
				It may have been in the middle keys.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Venerida',
		family: 'Veneridae',
		commonName: 'Pointed Venus',
		scientificName: 'Anomalocardia cuneimeris',
		standardSize: '12-18mm',
		recordSize: '24mm',
		images: [
			{
				link: 'pointed-venus-anomalocardia-cuneimeris',
				notes: `
				Found on Peanut Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Lace Murex',
		scientificName: 'Chicoreus florifer',
		standardSize: '35-70mm',
		recordSize: '81mm (Florida), 93mm (Carribean)',
		images: [
			{
				link: 'lace-murex-chicoreus-florifer',
				notes: `
				The majority of these were found on Fort Myers (Estero Island),
				Marco Island (Tiger Tail), and Kice Island.
				The largest specimen is 76mm.
				The smallest is 16mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Apple Murex',
		scientificName: 'Phyllonotus pomum',
		standardSize: '50-84mm',
		recordSize: '133mm',
		images: [
			{
				link: 'apple-murex-phyllonotus-pomum',
				notes: `
				The majority of these were found on Fort Myers (Estero Island),
				Marco Island (Tiger Tail), and Kice Island.
				The largest specimen is 64mm.
				The smallest is 16mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Rose Murex',
		scientificName: 'Vokesimurex rubidus',
		standardSize: '25-45mm',
		recordSize: '50mm (Florida), 68mm (Overall)',
		images: [
			{
				link: 'rose-murex-vokesimurex-rubidus',
				notes: `
				The four best speciments (largest one and 3 most colorful) were found on Marco Island (Tiger Tail)
				The other two were found on Kice Island.
				The largest is 38mm
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Hay\'s Rocksnail',
		scientificName: 'Stramonita canaliculata',
		standardSize: '35mm-75mm',
		recordSize: '112mm',
		images: [
			{
				link: 'hays-rocksnail-stramonita-canaliculata',
				notes: `
				I do not remember where I found these.
				Likely at least some are from the rock jetty at Amelia Island (Fort Clinch).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Florida Rocksnail',
		scientificName: 'Stramonita floridana',
		standardSize: '50-80mm',
		recordSize: '132mm',
		images: [
			{
				link: 'florida-rocksnail-stramonita-floridana',
				notes: `
				Largest specimens found at the rock jetty at Amelia Island (Fort Clinch).
				Largest specimen is 63mm.
				Smaller specimens from Hutchinson Island (Chastain Beach).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Rustic Rocksnaill',
		scientificName: 'Stramonita rustica',
		standardSize: '25-34mm',
		recordSize: '55mm',
		images: [
			{
				link: 'rustic-rocksnail-stramonita-rustica',
				notes: `
				Found on West Palm Beach (Phipps Ocean Park).
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Pisaniidae',
		commonName: 'Tinted Catharus',
		scientificName: 'Gemophos tinctus',
		standardSize: '25-28mm',
		recordSize: '38mm',
		images: [
			{
				link: 'tinted-cantharus-gemophos-tinctus',
				notes: `
				Found all  over the place.
				Largest is 32mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Muricidae',
		commonName: 'Deltoid Rock Shell',
		scientificName: 'Vasula deltoidea',
		standardSize: '30-40mm',
		recordSize: '52mm',
		images: [
			{
				link: 'deltoid-rock-shell-vasula-deltoidea',
				notes: `
				Found in piles of shells tumbled out of dredged sand for a beach replenishment 
				on West Palm Beach (Phipps Ocean Park).
				Largest specimen is 35mm.
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

	// but I have a hunch that I found them in the shell waste piles
	// left for us during the beach replenishment in West Palm Beach 2021 (Phipps Ocean Park).

];
