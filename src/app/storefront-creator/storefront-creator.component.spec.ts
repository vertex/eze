import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontCreatorComponent } from './storefront-creator.component';

describe('StorefrontCreatorComponent', () => {
  let component: StorefrontCreatorComponent;
  let fixture: ComponentFixture<StorefrontCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorefrontCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorefrontCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
