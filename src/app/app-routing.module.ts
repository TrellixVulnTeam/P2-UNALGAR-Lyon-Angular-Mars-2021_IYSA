import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { HomeComponent } from "./home/home.component";
import { RulesComponent } from "./rules/rules.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "game",
    component: GameComponent,
  },
  {
    path: "rules",
    component: RulesComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
