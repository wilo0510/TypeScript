console.log('Hola mundo');
// Tipos
var mystring :string="Hello world";
mystring=22+"";


var mynumber:number=22;
var mybool:boolean=false;

var myVar:any="Hello";
myVar=false;

//Strings
var StringArray:string[]=["item1","item2",""];
var NumberArray:number[]=[1,2,3];


//Tuplas
var strNumtupla:[string,number];
strNumtupla=["Hola",4];

//void undefined null

//let myvoid:void=undefined;
//let myNull:null=null;
//let myundefined:undefined= undefined;

//Funciones

function sumar(num1:number,num2:number){
    return num1+num2;
}typeof(strNumtupla)

/*let miSuma=function(
    num1:number|string,
    num2:number|string):number{
        if(typeof(num1==='string')){
            num1=parseInt(num1);
        }
        if(typeof(num2==='string')){
            num2=parseInt(num2);
        }
        return num1+num2;
*/
}
//interfaces
interface ITareas{
    titulo:string;
    texto:String;
}
function mostrarTareas(tareas:{titulo:string;texto:string;}){
    console.log(`${tareas.titulo}-${tareas.texto}`)
};

let miTarea:ITareas={titulo:"Comer",texto:"Patatas"};

mostrarTareas(miTarea);

//Clases
class User{
    private name:string;
    email:string;
    protected age:number;
    constructor(name:string,age:number,email:string){
        this.name=name;
        this.email=email;
        this.age=age;
    }
    registrar(){
        console.log(`${this.name} esta registrado`)
    }
    mostrarEdad(){
        return this.age;
    }
}
var john=new User("Jhon",25,"asdas");

document.write(john.registrar());