   var res = 0;
    
function frstApp(word, letter) {
    var k="k";
    
    var res = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == k) {
            res = [i]-1 ;
            //res+=1;
            return res;
        }
    }
}    

console.log(frstApp("barakurma", "k"));