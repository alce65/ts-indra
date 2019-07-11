"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _06_alumno_1 = __importDefault(require("./06_alumno"));
const _06_persona_1 = __importDefault(require("./06_persona"));
let p3;
const p1 = new _06_persona_1.default('Pepe', 34);
const p2 = new _06_persona_1.default('Elena', 28);
p3 = new _06_persona_1.default();
p1.saludar();
p1.saludar(p2.nombre);
// p2.trabajo = 'Programadora'; // Da error porque la propiedad no existe
// delete p2.edad; // Da error porque edad es protected
console.log(p1);
console.log(p2);
console.log(_06_persona_1.default.especie);
console.log(_06_persona_1.default.pensar());
const a1 = new _06_alumno_1.default('Carlos', 31, 'Angular');
let a2;
a2 = new _06_alumno_1.default('Juan', 21, 'TypeScript');
console.log(a1);
a1.saludar();
console.log(a1 instanceof _06_alumno_1.default);
console.log(a1 instanceof _06_persona_1.default);
console.log(a1 instanceof Object);
//# sourceMappingURL=06_clases.js.map