import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTestComponent } from './pages/material-test/material-test.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtontoggleComponent } from './pages/buttontoggle/buttontoggle.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { DividerComponent } from './pages/divider/divider.component';
import { ExpansionComponent } from './pages/expansion/expansion.component';
import { FormComponent } from './pages/form/form.component';
import { GridComponent } from './pages/grid/grid.component';
import { IconComponent } from './pages/icon/icon.component';
import { InputComponent } from './pages/input/input.component';
import { ListComponent } from './pages/list/list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { RadioComponent } from './pages/radio/radio.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { SelectComponent } from './pages/select/select.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { SlidetoggleComponent } from './pages/slidetoggle/slidetoggle.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { SortheaderComponent } from './pages/sortheader/sortheader.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { TableComponent } from './pages/table/table.component';
import { TabgroupComponent } from './pages/tabgroup/tabgroup.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { TreeComponent } from './pages/tree/tree.component';
const routes: Routes = [
  { path: '', component: MaterialTestComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'buttontoggle', component: ButtontoggleComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'expansion', component: ExpansionComponent },
  { path: 'form', component: FormComponent },
  { path: 'grid', component: GridComponent },
  { path: 'icon', component: IconComponent },
  { path: 'input', component: InputComponent },
  { path: 'list', component: ListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'slidetoggle', component: SlidetoggleComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'sortheader', component: SortheaderComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabgroup', component: TabgroupComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
