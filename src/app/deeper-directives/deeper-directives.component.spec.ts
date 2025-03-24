import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperDirectivesComponent } from './deeper-directives.component';

describe('DeeperDirectivesComponent', () => {
  let component: DeeperDirectivesComponent;
  let fixture: ComponentFixture<DeeperDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeeperDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeeperDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
