import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHistoryComponent } from './place-history.component';

describe('HistoryComponent', () => {
  let component: PlaceHistoryComponent;
  let fixture: ComponentFixture<PlaceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
