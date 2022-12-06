import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPComponent } from './informacion-p.component';

describe('InformacionPComponent', () => {
  let component: InformacionPComponent;
  let fixture: ComponentFixture<InformacionPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
