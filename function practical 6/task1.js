
function countVowels(str, vow) {
    var res = 0;
    var vow = [A, a, E, e, I, i, O, o, U, u];
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case A:
            case a:
            case E:
            case e:
            case I:
            case i:
            case O:
            case o:
            case U:
            case u:
                res++; }    
    }
   
}

countVowels("odjmfiodnnf", "o")


/*neresen yadatak*/