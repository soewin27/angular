import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestComponent } from './pages/test/test.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { CustompipeComponent } from './pages/custompipe/custompipe.component';

const routes: Routes = [
  { path :'', component:MainComponent},
  { path : 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: 'pipe', component: PipeComponent },
  { path:'custompipe',component:CustompipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
