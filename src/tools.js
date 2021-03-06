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
export const zeroPad = (num, places) => String(num).padStart(places, '0')

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

export const getIndexArray = (size = 100) => new Array(size).fill(0).map((_, index) => index);
export const getRangeArray = (min, max) => new Array(max - min).fill(0).map((_, index) => index + min);
export const getRandomRangeArray = (min, max) => new Array(max - min)
	.fill(0)
	.map((_, index) => index + min)
	.sort(() => .5 - Math.random());

export const getBooleanArray = (size = 100) => new Array(size).fill(false).map(() => false);
const getResultArray = (size = 100) => new Array(size).fill(null).map(() => ({
	ok: 0,
	notOk: 0
}));

export const getNewResults = () => ({
	person: getResultArray(100),
	action: getResultArray(100),
	object: getResultArray(100),
	description: getResultArray(100),
});

const keyExists = (key) => {
	return !!localStorage.getItem(key);
}
const keyJsonOk = (key) => {
	const data = localStorage.getItem(key);
	let json
	try {
		json = JSON.parse(data);
	} catch (error) {
		json = null;
	}
	return json;
}
export const getResults = () => {
	const key = 'results';
	return keyExists(key) && keyJsonOk(key)
		? JSON.parse(localStorage.getItem(key))
		: getNewResults();
};

export const saveResults = (results) => {
	const key = 'results';
	localStorage.setItem(key, JSON.stringify(results));
}
