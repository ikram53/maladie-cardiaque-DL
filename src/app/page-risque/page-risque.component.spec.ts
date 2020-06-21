import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PageRisqueComponent } from "./page-risque.component";

describe("PageRisqueComponent", () => {
  let component: PageRisqueComponent;
  let fixture: ComponentFixture<PageRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRisqueComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
