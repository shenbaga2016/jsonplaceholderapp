import { TestBed ,async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MydataserviceService } from './mydataservice.service';
import { browser, logging , by, element } from 'protractor';
describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
    HttpClientModule,
    Ng2SearchPipeModule
    ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClientModule,
      MydataserviceService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

it(`should have as title 'scroll'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('scroll');
  });
 it('should render title in a h1 tag', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h1').textContent).toContain('Angular Image Gallery Application');
   });
});
