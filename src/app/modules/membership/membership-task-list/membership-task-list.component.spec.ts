import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipTaskListComponent } from './membership-task-list.component';

describe('MembershipTaskListComponent', () => {
  let component: MembershipTaskListComponent;
  let fixture: ComponentFixture<MembershipTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
