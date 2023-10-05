

function jeValidniDatum (datum) {
    const den = Number(datum.slice(0, 2));
    const mesic = Number(datum.slice(3, 5));
    const rok = Number(datum.slice(6, 11));
    
        if(rok <1900 || rok>2100){
           return false
        } 

        if(mesic <1 || mesic >12) {
           return false
        }

        if(den < 1 || den > dejPocetDniVMesici(rok, mesic)) {
            return false
        }

       

    return true
    
}

console.log(jeValidniDatum('29.02.2027'))

function dejPocetDniVMesici(rok, mesic) {
    const dnyVMesici = [31,28,31,30,31,30,31,31,30,31,30,31];
        
    if (mesic === 2 && jePrestupnyRok(rok)){
            return 29
        } else {
            return dnyVMesici[mesic - 1];
        }
}

function jePrestupnyRok(rok) {
    if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
        return true
    }
    return false;
}