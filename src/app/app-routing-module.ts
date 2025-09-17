import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { Landingpage } from './landingpage/landingpage';
import { ListItems } from './list-items/list-items';

const routes: Routes = [
  {
    path:'',
    component: Landingpage
  },
  {
    path:'helpcenter',
    component: HelpcenterComponent
  },
  {
    path: 'employees-list',
    component: ListItems
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
