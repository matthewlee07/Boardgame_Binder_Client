import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBoardgamesComponent } from './user-boardgames.component';

describe('UserBoardgamesComponent', () => {
  let component: UserBoardgamesComponent;
  let fixture: ComponentFixture<UserBoardgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBoardgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBoardgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
