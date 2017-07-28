function staircase(n){

    for(var i=0; i<=5; i++){
//wrong..
        
        //staircase should be
        //****0
        //***00
        //**000
        //*0000
        //00000
        for(var j=0; j<i; j++){
            document.write("*");
        }
        document.write("<br>")
    }
}
staircase(5);
