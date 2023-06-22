import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenclothesComponent } from './menclothes.component';

describe('MenclothesComponent', () => {
  let component: MenclothesComponent;
  let fixture: ComponentFixture<MenclothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenclothesComponent]
    });
    fixture = TestBed.createComponent(MenclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
