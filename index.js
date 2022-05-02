// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function nondestructivelyAppendCat(name) {
    cats.push(name);
}
function nondestructivelyPrependCat(name) {
    cats.unshift(name);
}
function nondestructivelyRemoveLastCat() {
    cats.pop();
}
function nondestructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, 2);
}
function removeFirstCat(name) {
    return cats.slice(1);
}