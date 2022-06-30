const majorSystemMap = {
	'0': 'P',
	'1': 'T',
	'2': 'N',
	'3': 'M',
	'4': 'R',
	'5': 'S',
	'6': 'B',
	'7': 'L',
	'8': 'F/V',
	'9': 'G'
}
const zeroPad = (num, places) => String(num).padStart(places, '0')

const generatePaoStrings = () => new Array(100)
	.fill(0)
	.map((_, index) => zeroPad(index, 2)
		.split('')
		.map(char => majorSystemMap[char])
		.join(' ')
	);
export const generatePaoData = (strings) => strings
	.map(string => ({
		string,
		person: '',
		action: '',
		object: '',
	}))
const paoStrings = generatePaoStrings()

// console.log(generatePaoData(paoStrings));
