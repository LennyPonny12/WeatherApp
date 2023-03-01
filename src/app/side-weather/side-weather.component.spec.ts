import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWeatherComponent } from './side-weather.component';

describe('SideWeatherComponent', () => {
  let component: SideWeatherComponent;
  let fixture: ComponentFixture<SideWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
