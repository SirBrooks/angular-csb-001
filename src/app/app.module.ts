import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import {MatButtonModule} from 'material/button';
// import IconButton from "@material-ui/core/IconButton";
// import { MatButtonModule } from "@angular/material";
import { CustomMaterialModule } from "./material.module";
//import { MatSliderModule } from "@angular/material/slider";
//import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
