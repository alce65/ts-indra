var MySpace;
(function (MySpace) {
    let a = 2;
    class MyClass {
    }
    MyClass.myProperty = 12;
    MySpace.MyClass = MyClass;
})(MySpace || (MySpace = {}));
var OtroSpace;
(function (OtroSpace) {
    OtroSpace.a = 23;
})(OtroSpace || (OtroSpace = {}));
console.log(MySpace.MyClass.myProperty);
console.log(OtroSpace.a);
//# sourceMappingURL=11_namespaces1.js.map