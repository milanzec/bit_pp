
var Arr = [3, 500, 12, 149, 53, 414, 1, 19];
var min = Arr[0];
var max = Arr[0];

for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] < min) {
        min = Arr[i]
    }
    if (Arr[i] > max) {
        max = Arr[i]
    }
    if (Arr[i] === max || Arr[i] === min) {
        var nmax = max;
        max = min;
        min = nmax;
        var Arr2 = Arr;
    }

}


console.log(Arr);

/*dobio sam max i min,uz pomoc nove var nmax kao posrednika zamenio im vrednosti tako da kad pojedinacno consol logujem min i max,dobijam nove izmenjene vrednosti ali uvek stampa niz kao sto je bio*/