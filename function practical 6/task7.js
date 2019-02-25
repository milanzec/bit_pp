
var Arr=[];
var Arr2 = [];
function maxElem(Arr) {
    max = Arr[0];
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] > max) {
            max = Arr[i]
        }
        if (typeof Arr[i] === "number") {
            Arr2[i] = Arr[i]
        }
    }
}
console.log(Arr2)


maxElem([3,4,5,6,1,2])

/*mislim da je dobra ideja ali dobijam prazan aray kao resenje*/