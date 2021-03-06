import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { IconsProviderModule } from "./../../icons-provider.module";
import { HomeRoutingModule } from "./home-routing.module";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { SharedModule } from "src/app/sharedmodule/shared.module";
import { HomeBooksComponent } from "./home-books/home-books.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzTableModule } from "ng-zorro-antd/table";

@NgModule({
  declarations: [
    HomeComponent,
    HomeBooksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzLayoutModule,
    NzButtonModule,
    NzSwitchModule,
    FormsModule,
    DragDropModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzTableModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
