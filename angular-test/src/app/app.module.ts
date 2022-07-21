import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestComponent } from './pages/test/test.component';
import { CustomstyleDirective } from './pages/customstyle.directive';
import { ChildComponent } from './component/child/child.component';
import { ExpenseEntryListComponent } from './component/expense-entry-list/expense-entry-list.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { DigitcountPipe } from './pages/digitcount.pipe';
import { CustompipeComponent } from './pages/custompipe/custompipe.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    ContactComponent,
    TestComponent,
    CustomstyleDirective,
    ChildComponent,
    ExpenseEntryListComponent,
    PipeComponent,
    DigitcountPipe,
    CustompipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
