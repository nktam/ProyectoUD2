export class Tarea {
  private static tareas = 0;
  constructor(
    public descripcion: string,
    public importante: boolean = false,
    public realizada: boolean = false,
    public id: number = -1
  ) {
    Tarea.tareas++;
    if (this.id === -1) {
      this.id = Tarea.tareas;
    }
  }
}
