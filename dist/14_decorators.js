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
function curso(target) {
    console.log(target);
    Object.defineProperty(target.prototype, 'curso', { value: () => 'Angular 2' });
    console.log(target.prototype);
    console.log(target.prototype.curso());
}
let Estudiante = class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
Estudiante = __decorate([
    curso,
    __metadata("design:paramtypes", [String])
], Estudiante);
console.log(Estudiante);
console.log(Estudiante.prototype);
const es = new Estudiante('Pepe');
console.log(es);
function Student(config) {
    return (target) => Object.defineProperty(target.prototype, 'course', { value: () => config.course });
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
//# sourceMappingURL=14_decorators.js.map