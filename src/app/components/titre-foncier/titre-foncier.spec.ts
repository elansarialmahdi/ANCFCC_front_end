import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreFoncier } from './titre-foncier';

describe('TitreFoncier', () => {
  let component: TitreFoncier;
  let fixture: ComponentFixture<TitreFoncier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreFoncier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitreFoncier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
