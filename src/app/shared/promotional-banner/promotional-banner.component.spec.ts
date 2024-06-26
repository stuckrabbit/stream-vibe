import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalBannerComponent } from './promotional-banner.component';

describe('PromotionalBannerComponent', () => {
  let component: PromotionalBannerComponent;
  let fixture: ComponentFixture<PromotionalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionalBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
