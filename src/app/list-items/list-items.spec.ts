import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItems } from './list-items';

describe('ListItems', () => {
  let component: ListItems;
  let fixture: ComponentFixture<ListItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
