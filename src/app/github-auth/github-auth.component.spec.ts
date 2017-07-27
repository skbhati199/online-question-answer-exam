import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAuthComponent } from './github-auth.component';

describe('GithubAuthComponent', () => {
  let component: GithubAuthComponent;
  let fixture: ComponentFixture<GithubAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
