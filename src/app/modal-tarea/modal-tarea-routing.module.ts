import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ModalTareaPage} from './modal-tarea.page';

const routes: Routes=[
  {
    path: '',
    component: ModalTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTareaPageRoutingModule {}
