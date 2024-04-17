import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLayoutComponent } from './poke-layout.component';

describe('PokeLayoutComponent', () => {
  let component: PokeLayoutComponent;
  let fixture: ComponentFixture<PokeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
