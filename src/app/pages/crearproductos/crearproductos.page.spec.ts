import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearproductosPage } from './crearproductos.page';

describe('CrearproductosPage', () => {
  let component: CrearproductosPage;
  let fixture: ComponentFixture<CrearproductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
