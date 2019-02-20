
var a =   [2, 4, -2, 7, -2, 4, 2]; 
res="";


for(i=0;i<a.length;i++){
    if(a[i]===a[a.length-1-i]){
        res="niz je simetrican"
    }else{
        res="niz nije simetrican"
    }
}
console.log(res);