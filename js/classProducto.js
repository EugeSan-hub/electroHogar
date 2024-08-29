export default class Producto {
  #id;
  #nombre;
  #descripcion;
  #marca;
  #cantidad;
  #precio;
  #imagen;
  #categoria;

  constructor(nombre, descripcion, marca, cantidad, precio, imagen, categoria) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#marca = marca;
    this.#cantidad = cantidad;
    this.#precio = precio;
    this.#imagen = imagen;
    this.#categoria = categoria;
  }
  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(value) {
    this.#nombre = value;
  }

  get descripcion() {
    return this.#descripcion;
  }

  set descripcion(value) {
    this.#descripcion = value;
  }

  get marca() {
    return this.#marca;
  }

  set marca(value) {
    this.#marca = value;
  }

  set cantidad(value) {
    this.#cantidad = value;
  }

  get cantidad() {
    return this.#cantidad;
  }

  set precio(value) {
    this.#precio = value;
  }

  get precio() {
    return this.#precio;
  }

  set imagen(value) {
    this.#imagen = value;
  }

  get imagen() {
    return this.#imagen;
  }
  
  set categoria(value) {
    this.#categoria = value;
  }

  get precio() {
    return this.#categoria;
  }

  toJSON(){
    return{
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      marca: this.marca,
      cantidad: this.cantidad,
      precio: this.precio,
      imagen: this.imagen,
      categoria: this.categoria
    }
  }
}
