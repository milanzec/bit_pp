/*Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];
var arr3 = [];




for (i = 0; i < arr2.length; i++) {
    arr3 = arr3 + arr1[i] + "," + arr2[i] + ",";
   



}
console.log(arr3);



/*nije dobar nacin jer smo dobili string a ne niz*/