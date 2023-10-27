import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HomeComponent } from './home/home.component';
import { MyFilterPipe } from './my-filter.pipe';
import { FilterKeywordsPipe } from './filter-keywords.pipe';
import { StartsWithPipe } from './starts-with.pipe';
import { ContainsPipe } from './contains.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserListComponent,
    UserAddComponent,
    HomeComponent,
    MyFilterPipe,
    FilterKeywordsPipe,
    StartsWithPipe,
    ContainsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
