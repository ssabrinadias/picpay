import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/template/user/user.component';
import { ModalBackdropComponent } from './components/template/modal-backdrop/modal-backdrop.component';
import { ModalConclusionComponent } from './components/template/modal-conclusion/modal-conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModalBackdropComponent,
    ModalConclusionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
