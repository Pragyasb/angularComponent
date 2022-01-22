import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReactiveComponent } from './dialog-reactive.component';

describe('DialogReactiveComponent', () => {
  let component: DialogReactiveComponent;
  let fixture: ComponentFixture<DialogReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
