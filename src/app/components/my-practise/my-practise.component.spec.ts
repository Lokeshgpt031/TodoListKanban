import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPractiseComponent } from './my-practise.component';

describe('MyPractiseComponent', () => {
  let component: MyPractiseComponent;
  let fixture: ComponentFixture<MyPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPractiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
