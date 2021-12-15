/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

// describe('Component: Login', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authService: AuthService;

//   beforeEach(() => {
//     // refine the test module by declaring the test component
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [AuthService],
//     });

//     // create component and test fixture
//     fixture = TestBed.createComponent(LoginComponent);
//     //injected into LoginComponent constructor

//     // get test component from the fixture
//     component = fixture.componentInstance;

//     // UserService provided to the TestBed
//     authService = TestBed.get(AuthService);
//   });

//   it('needsLogin returns true when the user has not been authenticated', () => {
//     spyOn(authService, 'isAuthenticated').and.returnValue(false);
//     expect(component.needsLogin()).toBeTruthy();
//     expect(authService.isAuthenticated).toHaveBeenCalled();
//   });

//   it('needsLogin returns false when the user has been authenticated', () => {
//     spyOn(authService, 'isAuthenticated').and.returnValue(true);
//     expect(component.needsLogin()).toBeFalsy();
//     expect(authService.isAuthenticated).toHaveBeenCalled();
//   });
// });

describe('login component', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(LoginComponent);
    //   to get the actual contnet
    // creating the component through the testbed it automatically injects the authService into the loginComponent constructor
    loginComponent = fixture.componentInstance;
    // to get the same instance of authService that was injected into the component we asked the testbed to resolve the dependency using testbed injector by using the get function
    authService = TestBed.get(AuthService);
  });

  it('if its not authenticated should return false by needsLogin', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(loginComponent.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
  it('if its authenticated should return true by needsLogin', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(loginComponent.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
