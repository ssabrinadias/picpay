import { TestBed, async } from '@angular/core/testing';

import { PayService } from './pay.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PayService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
      ],
    }).compileComponents();
  }));


  it('should be created', () => {
    const service: PayService = TestBed.get(PayService);
    expect(service).toBeTruthy();
  });
});
