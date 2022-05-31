function encodeDNA1(strand) {
    let DNA = [];
    for (let i = 0; i < strand.length; i+= 1) {
        if (strand[i] === "A") DNA.push(strand[i]= "T");
        if (strand[i] === "T") DNA.push(strand[i]= "A");
        if (strand[i] === "C") DNA.push(strand[i]= "G");
        if (strand[i] === "G") DNA.push(strand[i]= "C");
    }
    return DNA;
}
console.log(encodeDNA1("AAATTCCGG"));

// OR

function encodeDNA(strand){
    let dna = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
        
    }

    let result = "";

    for (let i = 0; i < strand.length; i++) {
        result = result + dna[strand[i]]; // or result += dna[strand[i]]
    }
    return result;

}

console.log(encodeDNA(["A", "A", "T", "T", "G", "C", "A", "G", "A"]));


