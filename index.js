const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    cats.push(cat);
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"] 
    const newCats = cats.slice(0, -1)
    return newCats
}
function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const newcats = cats.slice(1)
    return newcats
}
function appendCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const newcats = [...cats, "Broom"]
    return newcats
}
function prependCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const newcats = ["Arnold", ...cats]
    return newcats
}