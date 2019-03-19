/*1)Write a function that capitalizes the first letter of each string argument it receives.  
    Function arguments: 'hello', 'there', 'ES', 6
    Output: 'Hello', 'There', 'ES'*/




const toUpper = (...allArgs) => (
    allArgs
        .filter(element => typeof element === "string")
        .map(element => (
            ` ${element.charAt(0).toUpperCase()}${element.slice(1)}`
        ))

)


const test = toUpper('hello', 'there', 'ES', 6);
console.log(test)


/*4)Write a function that filters all even elements of the array.
    Input: [6, 11, 9, 0, 3]
    Output: [6, 0]*/




const filterArray = (arr) => arr.filter(elem => elem % 2 === 0)

const test = filterArray([6, 11, 9, 0, 3])

console.log(test)



/*2)Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
    Input: 120
    Output: 24 
    */








const sale = (price) => price / 100 * 20

console.log(sale(120))

/*12)Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
    Output: 8*/




const maxElem = (arr) => Math.max(...arr)


let arrayTest = [2, 7, 3, 8, 5.4]
console.log(maxElem(arrayTest))
//console.log(Math.max(...array))



/*6)Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8]*/



const keepInteger = (arr) => (

    arr.filter(elem => parseInt(elem) === elem)
)

console.log(keepInteger([1.6, 11.34, 9.23, 7, 3.11, 8]))


/*3)Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]*/



const increaseBy = (arr, n) => arr.map(element => element + n)

console.log(increaseBy([4, 6, 11, -9, 2.1], 2))


/*11)Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48*/



const product = (arr) => arr.reduce((a, b) => a * b)

console.log(product([2, 8, 3]))








5) Write a function that filters all the strings from the given array that contain substring JS or js.
    Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
Output: ['babel.js, 'JS standard']


    const filterstr = (arr) => arr.filter(elem => elem.includes("js") || elem.includes("JS"))


console.log(filterstr(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']))

