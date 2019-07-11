"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    /* public nombre: string;
    protected edad: number;
    constructor(nombre = '', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    } */
    constructor(nombre = '', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }
    static pensar() {
        return 'Pienso...';
    }
    saludar(otro = 'amigo') {
        console.log(`Hola ${otro}, soy ${this.nombre}`);
    }
}
Persona.especie = 'Homo sapiens';
exports.default = Persona;
//# sourceMappingURL=06_persona.js.map