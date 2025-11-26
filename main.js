class Node {
  /**
   * Constructor de la clase Nodo para manejar los nodos de los arboles
   * @param {number} id
   * @param {string} name
   * @param {number} parentId
   */
  constructor(id, name, parentId) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.lvl = 0;
    this.children = [];
  }

   /**
   * Metodo para anadir un hijo (recursivo)
   * Recorre el arbol hasta encontrar el nodo cuyo id coincide con el parenId del nodo nuevo
   * El metodo en el peor de los casos debera recorrer todo el arbol, asi que su complejidad es de O(n)
   * @param {Node} node
   */

    addChildren(node){
        if(this.id == node.parentId){
            node.lvl = this.lvl +1;
            this.children.push(node)
        }else{
            this.children.forEach((nextNode) => nextNode.addChildren(node))
        }
    }
    /**
     * Metodo para imprimir el arbol completo
     * Derivado que tiene que imprimir cada nodo una vez entonces su complejidad es de O(n)
     * */

    print(){
        console.log(' '.repeat(this.lvl * 4),this.name);
        this.children.forEach((childrenNode)=>{
            childrenNode.print();
        })
    }
}

class Tree {
    /** 
     * Constructor 
     * @param {Node} root 
     * */

    constructor(root){
        this.root = root;
    }

    /**
     * Metodo para crear un nuevo nodo y insertarlo en el arbol
     * y lo que hace es crear el nuevo nodo y manda a llamar a addChildren(),
     * asi que por consecuencia tendria una complejidad de O(n)
     * @param {number} id
     * @param {string} name
     * @param {number} parentId 
     */
    addNode(id,name,parentId){
        const newNode = new Node(id,name,parentId);
        this.root.addChildren(newNode);
    }

    /**
     * Imprimir todo el arbol, este como llama a print(), del nodo
     * por consecuente tendria la misma complejidad de O(n) 
     * */

    printThree(){
        this.root.print()
    }
}

/** 
 * Datos de Prueba
*/

const node = new Node(0, "", 0);
const three = new Tree(node);

/* Data */
three.addNode(1, "Mascotas", 0);
three.addNode(2, "Gato", 1);
three.addNode(3, "Perro", 1);
three.addNode(4, "Plantas", 0);
three.addNode(5, "Arbol", 4);
// se corrige el id parent de Flores
three.addNode(6, "Flores", 4);
three.addNode(7, "Micu", 2);
three.addNode(8, "Sasy", 2);
three.addNode(9, "Fido", 3);
three.addNode(10, "Bobby", 3);
three.addNode(11, "Roble", 5);
console.log("Arbol:");
three.printThree();


/* Tarea #1 */
console.log("Tarea #1")
three.addNode(12, "Dakota", 2);
three.addNode(13, "Max", 3);
three.printThree();


/* Tarea #2 */
console.log("Tarea #2\nEl registro que no coincide es Flores dado que el parent que tiene es 3 que es Perro,\ny segun la interpretacion dada Flores es una Planta y no un Perro\nArbol corregido ")
/* se corriguio en el tema de Flores anteriormente  */
three.printThree();

/* Tarea #3 */
console.log("Tarea #3")
three.addNode(14, "Contienentes", 0);
three.addNode(15, "Europa", 14);
three.addNode(16, "Italia", 15);
three.addNode(17, "Rumania", 15);
three.addNode(18, "Asia", 14);
three.addNode(19, "China", 18);
three.addNode(20, "Japon", 18);
three.addNode(21, "America Latina", 14);
three.addNode(22, "Estados Unidos", 21);
three.addNode(23, "Mexico", 21);
three.addNode(24, "Guatemala", 21);
three.addNode(25, "Quetzaltenango", 24);
three.addNode(26, "Ciudad de Mexico", 23);
three.printThree()

