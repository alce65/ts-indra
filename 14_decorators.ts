function Algo() {}
const o = new Algo();
Object.defineProperty(o, 'nombre', {value: 'Pepe'} );
console.log(o);
console.log(o.nombre);

function curso(target: Function) {
    console.log(target)
    Object.defineProperty(
        target.prototype,
        'curso',
        {value: () => 'Angular 2'},
    );
    console.log(target.prototype)
    console.log(target.prototype.curso())
}
@curso
class Estudiante {
    constructor(public nombre: string) {}
}

console.log(Estudiante)
console.log(Estudiante.prototype)


const es = new Estudiante('Pepe');
console.log(es)

function Student(config) { 
    return (target: Function) => 
        Object.defineProperty(
            target.prototype,
            'course',
            {value: () => config.course}
        )
}

// tslint:disable-next-line: max-classes-per-file
/* @Student({
    course: 'Angular 2',
})
class Estudiante2 {
    constructor(public firstName: string, 
                public lastName: string) {}
}

let es2 = new Estudiante2('Pepe', 'Pérez'); */
// console.log(es2.course()); // Angular 2