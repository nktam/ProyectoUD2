export class Tarea {
  constructor(
    public descripcion: string,
    public importante: boolean = false,
    public realizada: boolean = false
  ) {}

  public static nuevaTarea(item: Tarea): Tarea {
    return new Tarea(item.descripcion, item.importante, item.realizada);
  }
}
