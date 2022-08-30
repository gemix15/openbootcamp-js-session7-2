const obj = {
    nombre: "Gemma",
    apellido: "Batlle",
    edad: 31,
    altura: 168,
    eresDesarrollador: true
};

const objEdad = obj.edad;
console.log(objEdad);

const lista = [
    obj,
    {
        nombre: "Maria",
        apellido: "Gómez",
        edad: 29,
        altura: 170,
        eresDesarrollador: false
    },
    {
        nombre:"Susana",
        apellido: "López",
        edad: 33,
        altura: 165,
        eresDesarrollador: true
    }
];
console.log(lista);

lista.sort((a, b) => b.edad - a.edad);
console.log(lista);


