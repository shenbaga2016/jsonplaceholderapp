import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MydataserviceService } from './mydataservice.service';

describe('MydataserviceService', () => {
  let service: MydataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientModule,

        ],
    });
    service = TestBed.inject(MydataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
