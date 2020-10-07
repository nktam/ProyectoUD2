import { Component } from "@angular/core";
import { Tarea } from "../model/tarea";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public listaTareas: Tarea[] = [];

  constructor() {
    this.listaTareas = [
      new Tarea("Hacer pastel", false, false),
      new Tarea("Recoger Moto", true, false),
      new Tarea("Cenar", true, false),
    ];
  }
}
