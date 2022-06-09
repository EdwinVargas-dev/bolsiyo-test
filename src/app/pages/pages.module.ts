import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FilterComponent } from '../components/filter/filter.component';
import { PhotosListComponent } from '../components/photos-list/photos-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { dataDetailReducer, dataReducer } from '../core/main.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FilterComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forFeature('passData', dataReducer),
    StoreModule.forFeature('passDataDetail', dataDetailReducer)
  ]
})
export class PagesModule { }
