console.log('Hola mundo');
// Tipos
var mystring = "Hello world";
mystring = 22 + "";
var mynumber = 22;
var mybool = false;
var myVar = "Hello";
myVar = false;
//Strings
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3];
//Tuplas
var strNumtupla;
strNumtupla = ["Hola", 4];
//void undefined null
//let myvoid:void=undefined;
//let myNull:null=null;
//let myundefined:undefined= undefined;
//Funciones
function sumar(num1, num2) {
    return num1 + num2;
}
typeof (strNumtupla);
function mostrarTareas(tareas) {
    console.log(tareas.titulo + "-" + tareas.texto);
}
;
var miTarea = { titulo: "Comer", texto: "Patatas" };
mostrarTareas(miTarea);
//Clases
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.registrar = function () {
        console.log(this.name + " esta registrado");
    };
    User.prototype.mostrarEdad = function () {
        return this.age;
    };
    return User;
}());
var john = new User("Jhon", 25, "asdas");
document.write(john.registrar());
