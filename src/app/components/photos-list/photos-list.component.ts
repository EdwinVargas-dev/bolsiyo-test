import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MainService } from 'src/app/core/main.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  allPhotos: any = []
  errorMessage: string = ''

  constructor(private mainService: MainService, private store: Store<any>) { }

  ngOnInit(): void {
    this.getAllPhotos()

    this.store.pipe(select('passData')).subscribe(dataPassed => {
      if (dataPassed.length) this.allPhotos = dataPassed
    })
  }

  getAllPhotos() {
    this.mainService.getAllPhotos().subscribe(
      (resPhotos: any) => {
        this.allPhotos = resPhotos.hits
      },
      (error: Error) => {
        this.errorMessage = error.message
      }
    )
  }

  seePhoto(dataPhoto: any, index: number) {
    this.moveScrollTop()
    this.store.dispatch({ type: 'passDataDetail', payload: { idElement: `photo_${index}`, data: dataPhoto } })
  }

  moveScrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

}
