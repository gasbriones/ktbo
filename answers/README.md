
## TEST FRONT END DEVELOPER

##### 0. Abiertamente qué opinas, React vs Angular vs Vue
Los tres son utilizados para crear aplicaciones SPA web, se basan en programación reactiva, utilization de streams de datos y desarrollo de componentes, 
una diferencia importante es que Angular es un framework, React y Vue son librerías.

Todos cuentan con grandes equipos trabajando en el desarrollo de sus respectivos cores como Google para Angular,
Facebook para React y ex desarrolladores de Google para Vue.

Angular es mucho más robusto pues al ser un framework posee en su core muchas herramientas y 
componentes propios que podemos utilizar a la hora del desarrollo.

React esta mas focalizado en la creación de vistas, la implementación de virtual DOM y JSX nos provee una mayor velocidad en la ejecución de operaciones ya que todo se se realiza memoria dando una sensación de fluidez muy grande, otra ventaja que nos provee son los ciclos de vida los cuales nos permite ejecutar funciones en las distintas etapas de los componentes o de la misma aplicación.


Una de las ventajas de VUE es que el tamaño en KB del core (es mucho menor al de  React y Angular), 
los templates estan escritos en HTML lo cual nos permite modificarlos sin las necesidad de aprender sintaxis JSX.
Al igual que React implementa Virtual DOM, Two-way Data Binding como en Angular que nos permite un flujo de datos bidireccional 
para sincronizar el modelo con vista  y se puede escribir en javascript vanila sin la necesidad de aprender type script o ES6 

##### 1. ¿Para qué sirve el bind en JS?
En javascript decimos que todas las funciones son objetos por lo cual cada funcion cuenta con un contexto propio, la utilizacion
del metodo bind nos permite crear una nueva funcion que al ser llamada tiene un context "this" asignado por nosotros.

```javascript

window.x = 'global';

let module = {
    x:0,
    getValue:function (){
        //el valor de this depende del contexto que le enviemos
    	return this.x
    }
};

let context_1 = {
    x:2
};

let context_2 = {
    x:4
};

let context_3 = {
    x:'Hola mundo'
};

//Creo una nueva función 
let myFunction = module.getValue;

let bindA = myFunction.bind(context_1);
let bindB = myFunction.bind(context_2);
let bindC = myFunction.bind(context_3);

console.log(myFunction()); //global
console.log(module.getValue()); //0
console.log(bindA()); //2
console.log(bindB()); //4
console.log(bindC()); // Hola mundo

//Example 2

let sum = function(a, b) {
  return a + b;
};

let add = sum.bind(null, 5);

add(10); //15

```  
##### 2. ¿Cómo iterarías el siguiente arreglo para imprimir en consola el id del name exactamente igual a “mapache”?

```javascript 

const array = [{id: 1, name: "mapache"}, {id:2, name:"perrito"}];

//Example 1
 
for (let i = 0; i < array.length; i++) {
    if(array[i].name === 'mapache') {
        console.log(array[i].id);
    } 
}

//Example 2

let result = array.find(obj => obj.name === "mapache");
console.log(result.id) ;

//Example 3

array.forEach((el) => {
    if(el.name === 'mapache'){
        console.log(el.id)        
    }
});

//Example 4

let i = 0;

do {
    console.log(array[i].id);
    i++;
}
while (array[i].name === "mapache");

//Example 5

array.map(ele => {
    if(ele.name === 'mapache'){
        console.log(ele.id)
    }
})
  	
```
##### 3. ¿Cuál es la diferencia entre scope y context?
* Scope: Se refiere a la visibilidad o alcance que tiene una variable, gracias este podemos decidir a que 
variables acceder en cada parte del código, existen 2 tipos el global y el local.

```javascript 
    //Scope local es cuando una variable esta declarada dentro de un bloque o una función
   
    function getName(){                                           
        const name = "Gaston"                                  
        console.log('llamado desde dentro del bloque --> ', name);
    }      
                                                            
    console.log('llamado desde fuera del bloque --> ',name );  //undefined
    getName(); //Gaston
    
    //Scope global es cuando una variable esta declarada fuera de un bloque o función
    
    const lastName = "Briones"
    
    
    function getLastName(){
        console.log('llamado desde dentro del bloque --> ', lastName); 
    }
    
    console.log('llamado desde fuera del bloque --> ',lastName );  //Briones    
    getLastName(); //Briones    
    
    //Example 2
    
    function a() {
        let outside = 'outside';
    
    	function b() {
            let inside = 'inside';
            console.log(outside); 
    	}
    	b(); // outside    
    	console.log(inside); 
    }
    
    a(); // inside is not defined  
```
* Context: Esta estrechamente ligado a los objetos y es el valor de "this" que es una referencia al objeto que posee el 
codigo que se esta ejecutando o bien al objeto de una funcion.

```javascript 
    //contexto global

    window === this //true
    console.log(this) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

    //contexto de funciones
    
    function Person() {     
        console.log(this); //Person {}
        this.name = "Gaston";                              
    }                              

    let subject = new Person();    
    console.log(subject.name); //Gaston
        
```
##### 4. ¿Cuál es la complejidad de runtime para la secuencia Fibonacci?

* O(2n)

```javascript
    
    

```



