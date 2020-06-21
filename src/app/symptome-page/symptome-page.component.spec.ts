import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SymptomePageComponent } from "./symptome-page.component";

describe("SymptomePageComponent", () => {
  let component: SymptomePageComponent;
  let fixture: ComponentFixture<SymptomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomePageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
