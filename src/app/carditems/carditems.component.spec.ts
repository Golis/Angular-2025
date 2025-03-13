import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemsComponent } from './carditems.component';

describe('CarditemsComponent', () => {
  let component: CarditemsComponent;
  let fixture: ComponentFixture<CarditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarditemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
