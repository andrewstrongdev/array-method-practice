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

//counting cards function with if else statements inside of a switch statement.
let count = 0;

function cc(card) {
  
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++
  if(count<=0){
    return count + 'Hold'
  } else if (count>0){
    return count + 'Bet'
  }
  break
  case 7:
  case 8:
  case 9:
   if(count<=0){
    return count + 'Hold'
  } else if (count>0){
    return count + 'Bet'
  }
  break
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
   count--
  if(count<=0){
    return count + 'Hold'
  } else if (count>0){
    return count + 'Bet'
  }
}
}
let r = cc('K')
r = cc(4)
r = cc(4)
console.log(r)