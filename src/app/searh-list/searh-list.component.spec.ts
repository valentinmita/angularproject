import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { SearhListComponent } from './searh-list.component';

describe('SearhListComponent', () => {
  let component: SearhListComponent;
  let fixture: ComponentFixture<SearhListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
        
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
