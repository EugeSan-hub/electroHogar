export class Producto {
  #id;
  #nombre;
  #descripcion;
  #marca;
  #cantidad;
  #precio;

  constructor(nombre, descripcion, marca, cantidad, precio) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#marca = marca;
    this.#cantidad = cantidad;
    this.#precio = precio;
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
}
