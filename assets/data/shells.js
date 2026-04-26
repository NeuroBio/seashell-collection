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
		this.idNotes = params.idNotes;

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
					Some mid-sized ones are from the Naples and Palm Coast.
					The rest are from Hutchinson Island.
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
				notes: `
				The dark ones (left) were Found on Sanibel (Blind Pass Beach) and Captiva.
				The lighter ones (right) were found at Phil Foster Park.
				`,
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
				notes: `My standard sized ones.  Found on Estero Island, Marco Island (Tiger Tail Beach), Atsena Otie, ect.`,
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
				Found on Estero Island, Lover's Key, Marco Island (Tiger Tail Beach), Keewaydin, Sanibel (Blind Pass Beach), ect.
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
				The best purple ones were found on Hutchinson Island (the northern end of Bathtub Beach).
				The rest were found at Phil Foster Park, John D. MacArthur Beach State Park, Coral Cove, and Peanut Island.
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
		scientificName: 'Divalinga quadrisulcata',
		idNotes: `
		Quadrisulcata has smooth edges (unlike Divaricella dentata)
		and the thickest, least-crowded bands in their crosshatch.
		The V is often wider than those on strigilla,
		because the left and right sides of the bands do not meet perfectly.
		It is more robust than strigilla and its valves are deeper.
		`,
		standardSize: '15-20mm',
		recordSize: '29mm',
		images: [
			{
				link: 'cross-hatched-lucine-divalinga-quadrisulcata',
				notes: `
				Specimens with yellow staining were found on Amelia Island.
				The clean small-to-mid sized specimens found across Florida.
				The largest specimens were found across several back-to-back days at Lover's Key.
				An additional 7 specimens (not pictured) were found at Coral Cove
				and Nathaniel P. Reed Hobe Sound National Wildlife Refuge. 
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Dentate Lucine',
		scientificName: 'Divaricella dentata',
		standardSize: '25-37mm',
		recordSize: '38mm',
		idNotes: `
		Perhaps the easiest to identify among the cross-hatch lucine lookalikes,
		dentata has visibly serated edges and grows larger than Divalinga strigilla and Divalinga quadrisulcata.
		It is the most robust shell of the three and its valves are not as deep as quadrisulcata.
		It's banding is thinner like strigilla's.
		`,
		images: [
			{
				link: 'dentate-lucine-divaricella-dentata',
				notes: `
				I believe both were found on Amerlia Island, but I do not remember.
				`,
			},
		],
	}),
		new Shell({
		class: ShellClass.BIVALVE,
		order: 'Lucinida',
		family: 'Lucinidae',
		commonName: 'Northern Cross-hatch Lucine',
		scientificName: 'Divalinga strigilla',
		standardSize: '12-22mm',
		recordSize: '24mm',
		idNotes: `
		Strigilla has smooth edges (unlike Divaricella dentata),
		but the bands in their crosshatch are thinner and thus more crowded than those in quadrisulcata.
		The V is often tighter than those on quadrisulcata,
		because the left and right sides of the bands meet perfectly.
		Its shell is the thinnest of the three.
		True to its name this is a northern species, so you are unlikely to find it on Florida below Amelia Island.
		`,
		images: [
			{
				link: 'northern-cross-hatched-lucine-divalinga-strigilla',
				notes: `
				Found on Amelia Island.
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
				Found primarily at Coral Cove Park and Nathaniel P. Reed Hobe Sound National Wildlife Refuge (about half),
				Hutchinson Island (3-5),
				and Sanibel (Blind Pass Beach) and Captiva (about half).
				The biggest one I have (bottom right corner) is 51mm.
				I am guessing is gerontic because it's pure white
				(other than the standard brown next to the umbo)
				and the final bands are compressed significantly.
				It was either on Hutchinson.
				My next largest secimens are between 40 and 47mm
				and are all from Coral Cove and Nathaniel P. Reed Hobe Sound National Wildlife Refuge.
				I included the three with the most vibrant interiors flipped over
				as well as one clean white to show that while when the purple is there,
				it's unmistakeable, but not all specimens have it.
				The Atlantic coast specimens tended to be
				All of my largest ones were found on the Atlantic coast.
				Though smaller, the Gulk coast specimens tended to be more vibranted colored
				both exteriorly and interiorly.
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
		idNotes: `
			The columbella species features triangular, peaked ribs that create a sharp zig-zag profile.
			This differs from the media species, which has square, flat-topped ribs.
		`,
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
		idNotes: `
			The media species features rectangular, plateaued ribs that create a traditional crenulated profile (like gear teeth).
			This differs from the columbella species, which has triangular, peaked ribs.
		`,
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
					Found across Florida.  Most heavily harvested from Estero Island
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
		idNotes: `
		Though similar in sculpting to mexicana,
		listeri grows larger and it is not as elongated (i.e. these shells are wider).
		Both can sport speckles and zigzags, but listeri will have brilliant yellow interiors that stand out from
		the pale yellow some mexicana have.
		The ridge on the protruding tail (posterior) of the shell is not as well defined on listeri.
		Its scaling is muted and it is not as raised.
		`,
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
		idNotes: `
		Though similar in sculpting to listeri,
		mexicana is longer than it is wide and does not grow as large.
		Both can sport speckles and zigzags, but mexicana will not have the bright yellow interiors of listeri;
		mexicana can have pale yellow interiors however.
		The scaling on the raised ridge on the protruding tail (posterior) of the shell is more developed on mexicana.
		`,
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
				Mostly found on Marco Island (Tiger Tail), Keewaydin, and Estero Island.
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
				Most found in the middle keys.
				The hinged double (my most brilliant colored one) was found covered in algea in Jupiter Sound.
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
				I don't remember where I found most of these.
				The two with periasticum were found in Jupiter Sound.
				One of the smaller white ones was found on Peanut Island.
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
				The pink ones were largely found on Marco Island (Tiger Tail) and Estero Island.
				The white ones were largely found at  Nathaniel P. Reed Hobe Sound National Wildlife Refuge.
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
				Many found on Cumberland Island, others on Estero Island.
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
		idNotes: `Discus has more bands that are thinner than Concentrica.  However, I don't believe I have examples of both to highlight the difference.`,
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
				Largely found on Marco Island (Tiger Tail) and Estero Island.
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
		idNotes: `
		Could be confsed with the far more common Chama congregata.
		However, sarda's brilliant, shiny red interior is an obvious difference.
		Sarda grows larger and is a deeper shell, especially when you compare the bottom valves.
		`,
		images: [
			{
				link: 'cherry-jewel-box-chama-sarda',
				notes: `
				Found in piles of shells tumbled out of dredged sand for a beach replenishment 
				at Phipps Ocean Park.
				Likely a bottom valve.
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
				Pink discoloration on the largest specimen is sponge.
				The largest is was pulled from in piles of shells tumbled out of dredged sand for a beach replenishment 
				at Phipps Ocean Park.
				The others were found in the middle keys.
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
				The white specimens were found at Nathaniel P. Reed Hobe Sound National Wildlife Refuge.
				I do not remember where I found the purple one.
				I just remember it was when I was giving
				my mom all the paper cockles  on the beach.
				I kept this one because it looked different.
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
				Found on Peanut Island and at Phil Foster Park.
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
				The majority of these were found on Estero Island,
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
				The majority of these were found on Estero Island,
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
		idNotes: `
		Canaliculata will not have the bright red/orange interiors seen on haemastoma,
		though it can have peach-colored interiors.
		It will have prominent double ridges following the shell's spiral and shoulder,
		which is in contrast to floridana which will have no or weak ridges and only one set.
		Those ridges also affect the shape of the aperture; canaliculata will have a more 7-shaped aperture,
		where the angle is caused by the aperture molding through those ridges.
		It also lacks the rounded shoulder of floridana, making its profile similar to a fighting conch.
		It is longer and gets larger than rustica.
		Rustica's ridges are relatively larger and thus there are fewer of them.
		`,
		standardSize: '35mm-75mm',
		recordSize: '112mm',
		images: [
			{
				link: 'hays-rocksnail-stramonita-canaliculata',
				notes: `
				The biggest one and the two in the bottom right are from the Palm Coast area.
				Potentially Phil Foster Park off the boat ramp.
				Likely, at least some are from the rock jetty at Amelia Island (Fort Clinch).
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
		idNotes: `
		Floridana will not have the bright red/orange interiors seen on haemastoma,
		though it can have peach-colored interiors.
		It will have no or weak ridges and only one set,
		which is in constrast to the prominant double ridging on canaliculata and rustica.
		Floridana will have a more C-shaped apperture due to its lack of ridging and its contour will be prominently rounded.
		It is longer and gets larger than rustica.
		`,
		standardSize: '50-80mm',
		recordSize: '132mm',
		images: [
			{
				link: 'florida-rocksnail-stramonita-floridana',
				notes: `
				Largest specimens found at the rock jetty at Amelia Island (Fort Clinch).
				Largest specimen is 63mm.
				Smaller specimens from Hutchinson Island (Chastain Beach).
				One of the larger specimens on first glance appears to have the 7-shaped apperture of canaliculata.
				However, closer inspection proves that the lip is broken.
				I identified it based on the rounded shoulder and lack of prominent ridges.
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
		idNotes: `
		Rustica will not have the bright red/orange interiors seen on haemastoma,
		or the peach-colored interiors of canaliculata or floridana.
		Its interiors should be white or clear.
		Rustica does not grow as large as the other species and its ridges are relatively larger than canaliculata's.
		Thus, there are fewer ridges.
		The shell is squat, with a profile similar to a Deltoid Rock Shell with spines.
		`,
		standardSize: '25-34mm',
		recordSize: '55mm',
		images: [
			{
				link: 'rustic-rocksnail-stramonita-rustica',
				notes: `
				Found in piles of shells tumbled out of dredged sand for a beach replenishment 
				at Phipps Ocean Park.
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
		idNotes: `
		The thick lip is the most obvious identifying trait.
		However, juvenile specimens may not have developed it yet and are more prone to lip breakage.
		The best way to tell juveniles from rocksnails is the beaded ridges that will alway be found on
		this species and never on rocksnails.
		`,
		standardSize: '25-28mm',
		recordSize: '38mm',
		images: [
			{
				link: 'tinted-cantharus-gemophos-tinctus',
				notes: `
				Found all  over the place.
				A large chunk were found on Hutchinson Island.
				Largest is 32mm.
				I have a mix of adults and juveniles turned to show their lips as examples.
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
				at Phipps Ocean Park.
				Largest specimen is 35mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Fasciolariidae',
		commonName: 'Chestnut Latirus',
		scientificName: 'Leucozonia nassa',
		standardSize: '30-40mm',
		recordSize: '68mm',
		images: [
			{
				link: 'chestnut latirus-leucozonia-nassa',
				notes: `
				The orangey ones were found in piles of shells tumbled out of dredged sand for a beach replenishment 
				at Phipps Ocean Park.
				The dark ones came from the middle keys and Hutchinson Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Melongenidae',
		commonName: 'Crown Conch',
		scientificName: 'Melongena corona',
		standardSize: '50-100mm',
		recordSize: '205mm',
		images: [
			{
				link: 'crown-conch-melongena-corona',
				notes: `
				Found all over the place.
				`,
			},
			{
				link: 'crown-conch-melongena-corona-giants',
				notes: `
				These were bycatch of the crab industry in Cedar Key.
				Pulled from the mud around where the crab traps are emptied.
				Largest specimen is 127mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Busyconidae',
		commonName: 'Pear Whelk',
		scientificName: 'Fulguropsis pyruloides',
		standardSize: '75-100mm',
		recordSize: '155mm',
		idNotes: `
		I want to be very clear what I am doing here:
		I know there are other propseed species of pear whelks in floida based solely on morphological data.
		However, until the DNA evidence comes in, I'm hedging my bets that the Florida pear whelk species
		are just populations and varients of the exact same species.
		This family of mollusks is too phenotypically plastic to trust morphology unless DNA backs it up.
		`,
		images: [
			{
				link: 'pear-whelk-fulguropsis-pyruloides',
				notes: `
				Found all over the place, from the naples area to the middle keys to to Amelia Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Littorinimorpha',
		family: 'Naticidae',
		commonName: 'Sharkeye',
		scientificName: 'Neverita duplicata and delessertiana',
		standardSize: '25-90mmm',
		recordSize: '98mm',
		idNotes: `
		The two shell species, without the animal, can only be consistently
		identified by the umbilicus (the hole under the shell).
		Neverita duplicata (the Atlantic species) has a smoother umbilicus that is flatter against the callus.
		Neverita delessertiana (the Gulf species) has a deeper umbilicus with a trench swinging away from the callus.
		However, the larger these species get,
		the harder it is to tell one from the other.
		The umbilicus' trench gets larger by necessity as the shell grows, ambiguating the id.
		furthermore, the callus can cover the trench entirely in the smaller specimens.
		Worse yet, the two species do have an overlapping range in South Florida.
		Other traits, such as delessertiana tending to be greyer and more puffed,
		is affected by the local environment, so they are not primarily identifiers.
		I'm kept the sizes general across the two species.
		Duplicata trends larger (up too 98mm) versus delessertiana (68mm),
		but that is due to habitat.
		In areas where they overlap I'm not sure they will be difefrently sized.
		`,
		images: [
			{
				link: 'shark-eye-neverita-duplicata-and-delessertiana',
				notes: `
				My specimens are from all over the place.
				The small ones with dark callous and interiors on the right
				are all from Little Talbot island.
				They are most likely Neverita duplicata.
				The small tan ones in the middle I'm not sure where they came from
				but they may be from Amelia island.
				That wouuld suggest Neverita duplicata, and they are flatter like that species,
				but they have more trench than my little Talbot finds.
				The midsized group to the left mostly from the Napels area.
				Those appear to be Neverita delessertiana.
				The five-shell arc of the largest specimen 
				to the second to last be specimen are from Hutchinson island.
				The final large one (with the dark interios) is from Amelia Island.
				These large specimens have the trenching expected of delessertiana,
				but Hutchinson island can have either species.
				One would not expect delessertiana on Amelia Island
				as that is too far north.
				The largest specimen is 76mm despite missing a hunk of its lip.
				`,
			},
			{
				link: 'shark-eye-highlight',
				notes: `
				Unfortunately, I do not remember where I found this one.
				I remember almost throwing it back, thinking it was tar stained
				like shells in Texas, then stopping, realizing something was off about it,
				and pocketing it.
				I believe this animal had a pigmentation mutation.
				In its early life, it was nearly black.
				Note the sharp line when it reverted to something closer to its expected colors for a while.
				Then it started to have issues where the black came back again.
				That inky staining is glossy and ultimatly starts and stops along growth lines.
				In contrast, its callus is honey tan.
				Its interior is also honey tan and while.
				All of that together suggests the mantel was
				not consistently correctly modulating pigment placement.
				I am less sure what to make of the unusual interior color.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Fasciolariidae',
		commonName: 'Horse Conch',
		scientificName: 'Triplofusus giganteus',
		standardSize: '341-400mm',
		recordSize: '606mm',
		images: [
			{
				link: 'horse-conch-juveniles-triplofusus-giganteus',
				notes: `
				These are fprimarily from the Naples area,
				and secondarily from the keys and Hutchinson's Island.
				I don't believe any were from from Matanzas Inlet or further north.
				`,
			},
			{
				link: 'horse-conch-triplofusus-giganteus',
				notes: `
				All found in the Naples area.
				Two on Estero Island (the near knobless one and the largest one).
				The larger one with preisticum was on Sanibel (Periwinkle Beach).
				The last three were from Dickman's Point.
				Technically, there were four from Dickman's, but one was an albino,
				so my dad took that one and traded me the largest one I have in exchange.
				The largest one is 279mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Fasciolariidae',
		commonName: 'True Tulip',
		scientificName: 'Fasciolaria tulipa',
		standardSize: '60mm-200mm',
		recordSize: '275mm',
		images: [
			{
				link: 'true-tulip-fasciolaria-tulipa',
				notes: `
				The largest one (165mm) was found on Estero Island.
				Many of the dark ones were found in the keys
				(including the second largest at Horseshoe Quarry).
				The orangy ones were found on Sanibel and Estero Island.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Neogastropoda',
		family: 'Fasciolariidae',
		commonName: 'Banded Tulip',
		scientificName: 'Cinctura lilium and hunteria',
		standardSize: '57-105mm',
		recordSize: '120mm',
		idNotes: `
		The best we have right now is this:
		lilium is on the Atlantic coast and is generally "more narrow and elognated."
		Its siphon can be longer but not always.
		Hunteria is on the Gulf coast, and it generally more bulbous.
		The species overlap in the keys.

		`,
		images: [
			{
				link: 'banded-tulip-cinctura-lilium-and-hunertia',
				notes: `
				The largest ones are 80mm.
				Found everywhere.
				The biggest proportion are from the Naples area and Little Talbot Island.
				I believe the dark ones in the upper right were from Little Talbot.
				They were found with the animal half dried out in them after a hurricane,
				so they went straight to the garage for the insects to deal with them.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Littorinimorpha',
		family: 'Ficidae',
		commonName: 'Paper Fig',
		scientificName: 'Ficus papyratia',
		standardSize: '50-100mm',
		recordSize: '115mm',
		images: [
			{
				link: 'paper-fig-ficus-papyratia',
				notes: `
				Most of these were found on Marco Island (tiger tail) and Dickman's point.
				A few more were found on Estero island.
				The largest specimen is 80mm.
				`,
			},
		],
	}),
	new Shell({
		class: ShellClass.UNIVALVE,
		order: 'Littorinimorpha',
		family: 'Cassidae',
		commonName: 'Scotch Bonnet',
		scientificName: 'Semicassis granulata',
		standardSize: '40-75mm',
		recordSize: '121mm',
		images: [
			{
				link: 'scotch-bonnet-semicassis-granulata',
				notes: `
				The best small ones (three on the right) were found in piles of shells tumbled out of dredged
				sand for a beach replenishment at Phipps Ocean Park.
				The other whole ones and the most complete large one came from Hutchinson island.
				The fragments were largely from Amelia Island I think.
				The one in the top left absolutely was.
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
