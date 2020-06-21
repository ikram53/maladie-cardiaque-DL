import { HttpClientModule} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeatureSliderComponent } from "./feature-slider/feature-slider.component";
import { HeaderComponent } from "./header/header.component";

import { FormsModule } from "@angular/forms";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AproposPageComponent } from "./apropos-page/apropos-page.component";
import { PageRisqueComponent } from "./page-risque/page-risque.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { SymptomePageComponent } from "./symptome-page/symptome-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureSliderComponent,
    AcceuilComponent,
    QuestionnaireComponent,
    SymptomePageComponent,
    AproposPageComponent,
    PageRisqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,

  ],
  providers: [],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
