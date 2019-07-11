"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function algo(a, b) {
    return a + b;
}
// Genéricos o tipos dinámicos
function algoMejor(a, b) {
    return a + b;
}
const x = algoMejor(2, 8);
// Ejmplo de TypeScript nativo
let z;
let y;
class Generic {
}
const g1 = new Generic();
g1.add(8, 8);
const g2 = new Generic();
g2.add('Pepe', 'Juan');
// Se pueden usar diversos genéticos
function dobeleGeneric(a, b) {
    return a;
}
function generic2(a) {
    console.log(a.length);
    return a;
}
//# sourceMappingURL=10_genericos.js.map