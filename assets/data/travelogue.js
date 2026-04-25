class TravelogueEntry {
	constructor (params) {
		this.title = params.title;
		this.date = params.date;
		this.subentries = params.subentries;
	}
}

class Hurricane extends TravelogueEntry {
	constructor (params) {
		super({
			title: params.name,
			date: params.date,
			subentries: params.affectedAreas,
		});
	}
}

class Vacation extends TravelogueEntry {
	constructor (params) {
		super({
			title: params.area,
			date: params.date,
			subentries: params.beaches,
		});
	}
}

class Subentry {
	constructor (params) {
		this.title = params.title;
		this.date = params.date;
		this.details = params.details;
	}
}

class Area extends Subentry {
	constructor(params) {
		super({
			title: params.area,
			date: params.date,
			details: params.details,
		})
	}
}

class Beach extends Subentry {
	constructor(params) {
		super({
			title: params.name,
			date: params.date,
			details: params.details,
		})
	}
}


const Travels = [
	new Vacation({
		area: 'The Palm Beaches',
		date: 'April 26-28th, 2021',
		beaches: [
			new Beach({
				name: 'Phipps Ocean Park',
				date: 'April 26th',
				details: 'Beach combed and dug through shells tumbled out of dredged sand for a beach replenishment.'
			}),
			new Beach({
				name: 'Coral Cove',
				date: 'April 27th',
				details: 'Beach combing.',
			}),
			new Beach({
				name: 'Jupiter Sound',
				date: 'April 27th',
				details: 'Snorkled and picked through mangroves.'
			}),
			new Beach({
				name: 'Peanut Island',
				date: 'April 28th',
				details: 'Snorkled and some beach combing.'
			}),
			new Beach({
				name: 'Blowing Rocks',
				date: 'April 28th',
				details: 'Beach combing.',
			}),
			new Beach({
				name: 'Phil Foster Park',
				date: 'April 28th',
				details: 'Beach combing, digging through the rocks, looked for what was attached to the boat launches.'
			}),

		],
	}),
	new Vacation({
		area: 'The Palm Beaches',
		date: 'April 16-18th, 2025',
		beaches: [
			new Beach({
				name: 'Coral Cove',
				date: 'April 16th',
				details: 'Beach combing.',
			}),
			new Beach({
				name: 'Jupiter Sound',
				date: 'April 16th',
				details: 'Waded and picked through mangroves.'
			}),
			new Beach({
				name: 'Phil Foster Park',
				date: 'April 17th',
				details: 'Beach combing, digging through the rocks'
			}),
			new Beach({
				name: 'Peanut Island',
				date: 'April 17th',
				details: `
				Beach combing around the entire island.
				Wading along the rocks under the closed walkways by teh interior lagoon.
				Hanging off the docks on the backside of the island to see what was attached.
				`
			}),
			new Beach({
				name: 'John D. MacArthur Beach State Park',
				date: 'April 17th',
				details: 'Beach combing.',
			}),
			new Beach({
				name: 'Nathaniel P. Reed Hobe Sound National Wildlife Refuge',
				date: 'April 18th',
				details: 'Beach combing.',
			}),
			new Beach({
				name: 'Jupiter Sound',
				date: 'April 18th',
				details: 'Waded and picked through mangroves.'
			}),

		],
	}),
]