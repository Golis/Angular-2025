import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItem } from './card-item';

describe('CardItem', () => {
  let component: CardItem;
  let fixture: ComponentFixture<CardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
