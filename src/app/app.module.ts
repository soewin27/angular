import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTestComponent } from './pages/material-test/material-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { BadgeComponent } from './pages/badge/badge.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtontoggleComponent } from './pages/buttontoggle/buttontoggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DividerComponent } from './pages/divider/divider.component';
import { MatListModule } from '@angular/material/list';
import { ExpansionComponent } from './pages/expansion/expansion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormComponent } from './pages/form/form.component';
import {MatSelectModule} from '@angular/material/select';
import { GridComponent } from './pages/grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconComponent } from './pages/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './pages/input/input.component';
import { ListComponent } from './pages/list/list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RadioComponent } from './pages/radio/radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { SelectComponent } from './pages/select/select.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SlidetoggleComponent } from './pages/slidetoggle/slidetoggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { SliderComponent } from './pages/slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { SortheaderComponent } from './pages/sortheader/sortheader.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { TableComponent } from './pages/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { TabgroupComponent } from './pages/tabgroup/tabgroup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeComponent } from './pages/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTestComponent,
    BadgeComponent,
    ButtonComponent,
    ButtontoggleComponent,
    CheckboxComponent,
    DatepickerComponent,
    DividerComponent,
    ExpansionComponent,
    FormComponent,
    GridComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressbarComponent,
    SpinnerComponent,
    RadioComponent,
    SelectComponent,
    RippleComponent,
    SidenavComponent,
    SlidetoggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortheaderComponent,
    StepperComponent,
    TableComponent,
    TabgroupComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
