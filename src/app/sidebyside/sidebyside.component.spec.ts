import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebysideComponent } from './sidebyside.component';

describe('SidebysideComponent', () => {
  let component: SidebysideComponent;
  let fixture: ComponentFixture<SidebysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebysideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
