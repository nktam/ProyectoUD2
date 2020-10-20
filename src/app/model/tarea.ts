export class Tarea {
  private static tareas=0;
  constructor(
    public descripcion: string,
    public importante: boolean=false,
    public realizada: boolean=false,
    public id: number=-1
  ) {
    Tarea.tareas++;
    if(this.id===-1) {
      this.id=Tarea.tareas;
    }
  }

  static fromJson(data: any) {
    if(!data.descripcion||!data.importante||!data.realizada) {
      throw (new Error("Argumento inválido: la estructura no concuerda con el modelo"));
    }
    return new Tarea(data.descripcion, data.importante, data.realizada);
  }

}
