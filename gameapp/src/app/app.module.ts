import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
