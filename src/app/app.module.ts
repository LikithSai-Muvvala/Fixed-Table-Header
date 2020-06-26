import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TableDataColorDirective } from './directives/table-data-color.directive';

import { AddTextPipe } from './pipes/add-text.pipe';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    MaterialModule 
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    TableDataColorDirective,
    AddTextPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
