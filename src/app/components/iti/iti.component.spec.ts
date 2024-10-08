import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItiComponent } from './iti.component';

describe('ItiComponent', () => {
  let component: ItiComponent;
  let fixture: ComponentFixture<ItiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
