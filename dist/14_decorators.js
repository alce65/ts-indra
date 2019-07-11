var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Algo() { }
const o = new Algo();
Object.defineProperty(o, 'nombre', { value: 'Pepe' });
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
        Object.defineProperty(target.prototype, 'course', { value: () => config.course });
    };
}
let Estudiante = class Estudiante {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
Estudiante = __decorate([
    Student({
        course: 'Angular 2',
    }),
    __metadata("design:paramtypes", [Object, Object])
], Estudiante);
let oEstudiante = new Estudiante('Pepe', 'Pérez');
console.log(oEstudiante.course()); // Angular 2
//# sourceMappingURL=14_decorators.js.map