import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsMainComponent } from './ips-main.component';

describe('IpsMainComponent', () => {
  let component: IpsMainComponent;
  let fixture: ComponentFixture<IpsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
