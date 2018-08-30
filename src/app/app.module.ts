import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BullsAndCowsComponent } from "./bulls-and-cows/bulls-and-cows.component";
import { FiveInARowComponent } from "./five-in-a-row/five-in-a-row.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/bulls-and-cows",
    pathMatch: "full"
  },
  { path: "bulls-and-cows", component: BullsAndCowsComponent },
  { path: "five-in-a-row", component: FiveInARowComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    BullsAndCowsComponent,
    FiveInARowComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
