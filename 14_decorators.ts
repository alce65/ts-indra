function Algo() {}
const o = new Algo();
Object.defineProperty(o, 'nombre', {value: 'Pepe'} );
console.log(o);
console.log(o.nombre);

/* function curso(target) {
    Object.defineProperty(
        target.prototype,
        'curso',
        {value: () => 'Angular 2'},
    );
}

@curso
class Estudiante {
    constructor(public nombre: string) {}
}

const es = new Estudiante('Pepe');
console.log(es.curso()) */

function Student(config) { 
    return (target) => {
        Object.defineProperty(
            target.prototype,
            'course',
            {value: () => config.course}
        )
    }
}

@Student({
    course: 'Angular 2',
})
class Estudiante {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let oEstudiante = new Estudiante('Pepe', 'Pérez');
console.log(oEstudiante.course()); // Angular 2