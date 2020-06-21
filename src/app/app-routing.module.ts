import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AproposPageComponent } from "./apropos-page/apropos-page.component";
import { PageRisqueComponent } from "./page-risque/page-risque.component";
import { QuestionnaireComponent } from "./questionnaire/questionnaire.component";
import { SymptomePageComponent } from "./symptome-page/symptome-page.component";

const routes: Routes = [

  {path: "questionnaire", component: QuestionnaireComponent},
  {path: "acceuil", component: AcceuilComponent},
  {path: "facteur", component: PageRisqueComponent},
  {path: "symptome", component: SymptomePageComponent},
  {path: "apropos", component: AproposPageComponent},
   {path: "**", redirectTo : "acceuil",
   pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
