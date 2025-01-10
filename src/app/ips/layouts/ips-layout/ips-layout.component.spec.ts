import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsLayoutComponent } from './ips-layout.component';

describe('IpsLayoutComponent', () => {
  let component: IpsLayoutComponent;
  let fixture: ComponentFixture<IpsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
