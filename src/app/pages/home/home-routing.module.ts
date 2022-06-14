import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeBooksComponent } from "./home-books/home-books.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "books", component: HomeBooksComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
