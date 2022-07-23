// Write your solution here!
function cats(){
    const cats = [];
    cats.unshift("milo", "otis", "garfield")
}

function destsructivelyAppendcat(name){
    const ralph = name;
    const cats = ["Milo", "Otis", "Garfield"]
    cats.append(ralph);
}

function destructivelyPrependCat(name){
    const ralph = name;
    const cats = ["Milo", "Otis", "Garfield"]
    cats.prepend(ralph);
}

function destructivelyRemoveLastCat(){
    const cats = ["Milo", "Otis", "Garfield"]
    const lastCat = catts.length - 1;
    cats.pop(lastCat);
}

function destructivelyRemoveFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"]
    cats.shift();
}

function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"]
    const ralph = name;
    const catss = cats.append(ralph)
    return catss;
}

function prependCat(name){
    const cats = ["Milo", "Otis", "Garfield"]
    const ralph = name;
    const catts = cats.prepend(ralph);
    return catts;
}

function removeLastCat(){
    const cats = ["Milo", "Otis", "Garfield"]
    const catts = cats.pop()
    return catts;
}

function removeFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"]
    const catts = cats.shift();
    return catts;
}