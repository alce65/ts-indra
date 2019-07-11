/**
 * Mixins: añaden propiedades y funcionalidades a las clases
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
class Persona {
    saludar() {
        console.log(`Hola soy ${this.name}`);
    }
}
// tslint:disable-next-line: max-classes-per-file
class Animal2 {
    comer() {
        console.log(`Estoy comiendo ${this.comida}`);
    }
}
// tslint:disable-next-line: max-classes-per-file
class Alumno {
    constructor(name, curso, comida) {
        this.name = name;
        this.curso = curso;
        this.comida = comida;
    }
}
applyMixins(Alumno, [Persona, Animal2]);
let al = new Alumno('Pepe', 'TS', 'pizza');
al.saludar();
al.comer();
//# sourceMappingURL=13_mixins.js.map