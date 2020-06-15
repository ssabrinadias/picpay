import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user.component';
import { ApiService } from '../services/api.service';

describe('Component: User', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            UserComponent
        ],
        imports: [
            HttpClientTestingModule,
            HttpClientModule
        ],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  beforeEach(() => {
    service = new ApiService(null);
    component = new UserComponent(service);
  });

});
