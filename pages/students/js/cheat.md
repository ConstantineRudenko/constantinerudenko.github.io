---
title: JS cheat sheet
---


<script lang="ts">
	import imgShallowCopy from './_JS tricks/shallow copy.png';
</script>

## For loops

### For of

Iterates over values in arrays.

```js
let arr = [10, 20, 30];
    
for (const value of arr) {
   console.log(value);
}
```

### For in

Iterates over indices in arrays and keys in objects.

```js
let arr = [10, 20, 30];

for (const i in arr) {
  console.log(arr[i]);
}
```

```js
let dict = {
    red:    "rgb(255,0,0)",
    green:  "rgb(0,255,0)",
    blue:   "rgb(0,0,255)"
}

for (const i in dict) {
    console.log(dict[i]);
}
```

### Array.forEach()

Runs the given function on every value in the array.

```js
let arr = [10, 20, 30];

arr.forEach(
	(val) => {
  	    console.log(val);
	}
);
```

::: tip
* Mozilla Developer Network &mdash; [for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
* Mozilla Developer Network &mdash; [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
* Mozilla Developer Network &mdash; [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
:::

## Template strings

Conveniently insert variables into your strings.

##### Example

```js
let foo = 5;

console.log(`the value of foo is: ${foo}`);
// "the value of foo is: 5"
```

You can also do this:

```js
let foo = 5;

console.log(`foo to the power of 3 is: ${foo ** 3}`);
// foo to the power of 3 is: 125
```

```js
let human = {
    name: "Jack",
    age: 13
}

console.log(`${human.name} is ${human.age} years old`);
// Jack is 13 years old
```

::: tip
Mozilla Developer Network &mdash; [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
:::

## Destructuring assignment

Destructuring assignment syntax allows to unpack values from arrays and properties from objects. This has several convenient applications, such as swapping variables without creating a temporary variable, creating functions with named arguments, and creating a copy of an object or array with added values.

### Swap variables

```js
let a = 1,
    b = 2;

[a,b] = [b,a];

// a = 2
// b = 1
```

### Named function arguments

With named function arguments you don't have to remember the order of arguments when calling a function.

```js
function sayTimes(
    {
        phrase,
        times
    }
){
    for(let i = 0; i < times; i++){
        console.log(phrase);
    }
}

sayTimes(
    {
        times: 5,
        phrase: "Repetition is the mother of all learning"
    }
);
```

::: tip
Mozilla Developer Network &mdash; [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
:::

## Static methods and attributes

Static methods and attributes are attached to the class itself, not a particular instance of the class. In other words, there is only one instance of a static attribute in the entire application which is shared by all instances of the class.

#### Example

```js
class Student {
	// static initialization
	// will be called automatically, only once
	static {
		Student.all = [];
	}

	constructor (name) {
		this.name = name;
		Student.all.push(this);
	}

	static GreetAll() {
		Student.all.forEach((student) => {
			console.log(`Hello, ${student.name}`);
		})
	}	
}

const ann = new Student("Ann");
const jack = new Student("Jack");
const bob = new Student("Bob");
const eve = new Student("Eve");

Student.GreetAll();

/*
	"static initialization called"
	"Hello, Ann"
	"Hello, Jack"
	"Hello, Bob"
	"Hello, Eve"
*/
```

::: tip
Mozilla Developer Network &mdash; [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static), [static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
:::

## In operator

You can check if an object contains a certain key.

```js
const person = {name: "Harry", age: 48};

if ("name" in person){ // true
    console.log(`name: ${person.name}`);
}

if ("expirationDate" in person){ // false
    console.log(`expiration date: ${person.expirationDate}`);
}
```

Output:

```text
name: Harry
```

::: tip
Mozilla Developer Network &mdash; [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
:::

## Optional chaining

Normally, if you try to call a method or read an attribute which does not exist, you'd raise an error. With optional chaining you can call a method or receive an attribute (if it exists), and move on without raising an error if it doesn't. This is useful when iterating over an array, where some objects might have properties set to `null` or `undefined`.

#### Example

```js
class Pet {
    constructor(name){
        this.name = name;
    }

    call(){
        console.log(`Come here, ${this.name}!`);
    }
}

let petOwners = [
    {
        name: "Steve",
        cat: new Pet("Couch")
    },
    {
        name: "Glen",
        dog: new Pet("Woofer")
    },
    null
]

for (let petOwner of petOwners) {
    petOwner?.dog?.call();
    // if petOwner is null or undefined, assume that .dog is undefined
    // if petOwner.dog is null or undefined, do nothing
}
```

```js
const animals = [
	{
		species: 'cat',
		name: 'Couch',
	},
	{
		species: 'dog',
		name: 'Flumph',
		wag() {
			console.log('Flumph happily wags its tail');
		},
	},
	null,
];

for (const animal of animals) {
	animal?.wag?.();
	// if animal is null or undefined, do nothing
	// if animal.wag is null or undefined, do nothing
}
```

::: tip
Mozilla Developer Network &mdash; [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
:::

## Console output


Console.table
:	Display objects and their properties in console, formatted as a table.


Console.dir
:	Display an interactive list of properties of a JavaScript object.

#### Example

```js
let arr = [
	{
    	name: "Ivy",
      	age: 29
	},
   {
     	name: "Dilan",
     	age: 42,
     	cat: {
        	name: "Whiskers",
          	age: 3
        }
   }
];

console.table(arr);
```

Output:

|(index)|name|age|cat|
|---|---|---|---|
|0|Ivy|29| |
|1|Dilan|42|`Object { name: "Whiskers", age: 3 }`|

::: tip
Mozilla Developer Network &mdash; [console.table( )](https://developer.mozilla.org/en-US/docs/Web/API/Console/table), [console.dir( )](https://developer.mozilla.org/en-US/docs/Web/API/console/dir)
:::


## Spread syntax (...)

### Array unpacking

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(
    sum(...numbers)
);
// 6
```

### Merging arrays

```js
let arr = [0, 1, 2];
let newNumber = 12;
arr = [...arr, newNumber];
```

### Assigning a variable number of elements


Using [Destructuring assignment](#destructuring-assignment)

```js
const [a, ...b] = [1, 2, 3];
// a = 1
// b = [2, 3]
```

```js
const [a, ...b] = [1, 2, 3, 4, 5];
// a = 1
// b = [2, 3, 4, 5]
```

### Shallow copy

```js
let obj = {
    attr_1: "a",
    attr_2: "b",
};

let copy = {
    ...obj,
    newAttr :"c"
};

console.log(obj);
/*
    attr_1: "a",
    attr_2: "b"
*/
console.log(copy);
/*
    attr_1:  "a",
    attr_2:  "b",
    newAttr: "c"
*/

```

::: warning
Shallow copy sets attributes of the target object identical to the source object.

This means that if the source object had a reference (i.e. non&ndash;[primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) attribute, the target object will be referencing the same thing! There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

<figure>
	<img src="./_JS%20tricks/shallow copy.png">
</figure>
:::

### Removing duplicates

```js
let arr = [
  1,1,
  2,2,
  3,3,
  4,4,4,4,4,
  5,5,5,5,5
];

arr = [...new Set(arr)];

console.log(arr);
// [1,2,3,4,5]
```

::: tip
Mozilla Developer Network &mdash; [Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
:::

## Array.map()

Applies the given function to every element of an array, then returns results as a new array.

#### Example

```js
let arr = [1,2,3];

editedArr = arr.map(
    (x) => x+1
);
// editedArr = [2,3,4]
```

You can nest `array.map` calls for more complex scenarios:

```js
let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let editedGrid = grid.map(
    (row) => row.map(
        (item) => item - 1
    )
)

console.table(editedGrid);
```
Output:

<table>
	<tbody>
		<tr>
			<th scope="col">(index)</th>
			<th scope="col">0</th>
			<th scope="col">1</th>
			<th scope="col">2</th>
		</tr>
		<tr>
			<th scope="row">0</th>
			<td>0</td><td>1</td><td>2</td>
		</tr>
		<tr>
			<th scope="row">1</th>
			<td>3</td><td>4</td><td>5</td>
		</tr>
		<tr>
			<th scope="row">2</th>
			<td>6</td><td>7</td><td>8</td>
		</tr>
	</tbody>
</table>

#### Combined with [spread syntax](#spread-syntax):

```js
let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let editedGrid = grid.map(
    (row) => [
        ...row.map(
            (item) => item - 1
        ),
        0
    ]
)

console.table(editedGrid);
```

Output:

<table>
	<tr>
		<th scope="column">(index)</th>
		<th scope="column">0</th>
		<th scope="column">1</th>
		<th scope="column">2</th>
		<th scope="column">3</th>
	</tr>
	<tr>
		<th  scope="row">0</th>
		<td>0</td><td>1</td><td>2</td><td>0</td>
	</tr>
	<tr>
		<th  scope="row">1</th>
		<td>3</td><td>4</td><td>5</td><td>0</td>
	</tr>
	<tr>
		<th  scope="row">2</th>
		<td>6</td><td>7</td><td>8</td><td>0</td>
	</tr>
</table>