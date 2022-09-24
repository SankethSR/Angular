import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-directive/basic-highlight.directive';
import { BetterHighlightDirective } from './better-directive/better-highlight.directive';
import { UnlessDirective } from './other-directives/unless.directive';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
