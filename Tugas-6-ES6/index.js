// Soal 1

const luasPersegiPanjang = (p, l) => {
    let luas = p * l;
    return luas;
}

const kelilingPersegiPanjang = (p, l) => {
    let keliling = 2 * (p + l);
    return keliling;
}

console.log(luasPersegiPanjang(10, 15), kelilingPersegiPanjang(10, 15));

// Soal 2

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`);
        }
    }
}

newFunction("William", "Imoh").fullName();

// Soal 3

const newObject = {
    firstName: "Rizky Rafi",
    lastName: "Azhara",
    address: "Permata Cimahi",
    hobby: "Watching Football",
}

const { firstName, lastName, address, hobby } = newObject;
console.log(firstName, lastName, address, hobby);

// Soal 4

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];
console.log(combined);

// Soal 5

const planet = "earth";
const view = "glass";

const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log(before);