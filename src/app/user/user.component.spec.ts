import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user.component';
import { ApiService } from '../services/api.service';
import { ModalService } from '../modal';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../modal';
import { PaymentModule } from '../payment/payment.module';
import { ItemUserComponent } from './components/item-user/item-user.component';
import { ConclusionComponent } from '../components/conclusion/conclusion.component';

describe('Component: User', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: ApiService;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            UserComponent,
            ItemUserComponent,
            ConclusionComponent
        ],
        imports: [
            HttpClientTestingModule,
            HttpClientModule,
            CommonModule,
            ModalModule,
            PaymentModule,
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
    modalService = new ModalService();
    component = new UserComponent(service, modalService);
  });

});
