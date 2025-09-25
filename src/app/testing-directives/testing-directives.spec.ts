import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDirectives } from './testing-directives';

describe('TestingDirectives', () => {
  let component: TestingDirectives;
  let fixture: ComponentFixture<TestingDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
