import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component/product/product.component';
import { FilterPipe } from './pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { HighlightDirective } from './directive/highlight.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FilterPipe,
    HeaderComponent,
    SearchComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
