export class Tarea {

  constructor(
    public descripcion: string,
    public importante: boolean=false,
    public realizada: boolean=false,
    public id: number=-1
  ) {}

  static fromJson(data: any) {
    if(!data.descripcion||!data.id||data.importante==null||data.realizada==null) {
      throw (new Error("Argumento inválido: la estructura no concuerda con el modelo"));
    }
    return new Tarea(data.descripcion, data.importante, data.realizada, data.id);
  }

}
