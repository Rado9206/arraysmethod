const letters = ['c', 'd']

console.log(`%cunshift:`, `color: blue`)
letters.unshift('a', 'b')
console.log(letters)
console.log('-------')

console.log(`%cpush:`, `color: blue`)
letters.push('e', 'f')
console.log(letters)
console.log('-------')

console.log(`%cincludes: 'e'`, `color: blue`)
console.log(letters.includes('e'))
console.log('-------')

const numbers = ['1', '2', '3']
const meals = ['🍔', '🍟', '🍕']

console.log(`%cconcat:`, `color: blue`)
const menu = numbers.concat(meals)
console.log(menu)
console.log('-------')

console.log(`%cspread & rest operator:`, `color: blue`)
const menu2 = [...numbers, ...meals]
console.log(menu2)
console.log('-------')

const numbers2 = [1, 5, 13, 26, 48]

console.log(`%cmap:`, `color: blue`)
const newNumbers2 = numbers2.map(x => x * 5)
console.log(newNumbers2)
console.log('-------')

console.log(`%cfor of:`, `color: blue`)

for (const x of newNumbers2) {
	if (x % 2 === 0) {
		console.log(`Liczba parzysta ${x}`)
	} else {
		console.log(`Liczba nieparzysta ${x}`)
	}
}
console.log('-------')

const colors = ['red']

console.log(`%cfor:`, `color: blue`)
colors.unshift('black')
colors.push('white')
console.log(colors)

for (let i = 0; i < colors.length; i++)
	console.log(`My color is: ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`)

console.log('-------')

const cars = 'Audi, Mercedes, BMW, Nissan, Toyota'

const newCars = cars.split(', ')
console.log(newCars)

if (newCars.length > 3) {
	console.log('Jest OK!')
} else {
	console.log('Nie jest ok')
}

if (newCars.includes('Audi')) {
	newCars.push('Skoda')
} else {
	newCars.pop
}
console.log(newCars)

console.log('');
console.log('-------')
console.log('callback and forEach excercise')
const numbers3 = [0.5, 4, 'abc']
const names = ['Zuza', 'Bartek', 'Jagoda', 'Radek']

numbers3.forEach(num => console.log(num * num))

console.log('-------')
console.log('uupercase array')
const bigNames = names.map(name => name.toUpperCase())
console.log(bigNames);



console.log('-------')
console.log('from array')
const showBigNames = (name) => {
	console.log(name.toUpperCase());
}

names.forEach(showBigNames)

console.log('-------')
console.log('one line code:')
names.forEach(el => console.log(el.toUpperCase()))