import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTareaPage } from './modal-tarea.page';

describe('ModalTareaPage', () => {
  let component: ModalTareaPage;
  let fixture: ComponentFixture<ModalTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
