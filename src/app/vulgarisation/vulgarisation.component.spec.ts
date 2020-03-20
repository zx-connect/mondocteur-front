import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulgarisationComponent } from './vulgarisation.component';

describe('VulgarisationComponent', () => {
  let component: VulgarisationComponent;
  let fixture: ComponentFixture<VulgarisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulgarisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulgarisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
