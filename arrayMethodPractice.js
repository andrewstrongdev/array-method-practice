//javascript array methods and properties
//----------------------------------------------------------------
let arr1 = [1, 2, 3]
//----------------------------------------------------------------

//concat()	Joins arrays and returns an array with the joined arrays
let arrConCat = [4,5,6]

arrConCat = arr1.concat(arrConCat)
//console.log(arrConCat)

//----------------------------------------------------------------

//copyWithin()	Copies array elements within the array, to and from specified positions
//array.copyWithin(target, start, end)
let arrCw = ['red','yellow','green','blue']

arrCw.copyWithin(2,0,1)  // copies 'red' over 'green'.
arrCw.copyWithin(2,0,0)  // does nothing because the third arguument nullifies the second arguement
arrCw.copyWithin(2,0)    // copies 'red' and 'yellow' over 'green' and 'blue'. Because no end arguement is provided
                           //it assumes that end is the array length.
//console.log(arrCw)

//----------------------------------------------------------------
