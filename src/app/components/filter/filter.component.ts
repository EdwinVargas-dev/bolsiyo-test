import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainService } from 'src/app/core/main.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  selectedOption: any = ''
  errorMessage: string = ''
  textSearch: string = ''

  constructor(private mainService: MainService, private store: Store<any>) { }

  ngOnInit(): void {
  }

  getPhotosByCategory(event: any) {
    this.mainService.getPhotosByCategory(event.target.value).subscribe(
      (dataPhotos: any) => {
        this.store.dispatch({ type: 'passData', payload: dataPhotos.hits })
      },
      (error: Error) => {
        this.errorMessage = error.message
      }
    )
  }

  getPhotosByText() {
    if (this.textSearch) {
      this.mainService.getPhotosByText(this.textSearch).subscribe(
        (dataPhotos: any) => {
          this.store.dispatch({ type: 'passData', payload: dataPhotos.hits })
        },
        (error: Error) => {
          this.errorMessage = error.message
        },
        ()=>{
          this.textSearch = ''
        }
      )
    }
  }

}
