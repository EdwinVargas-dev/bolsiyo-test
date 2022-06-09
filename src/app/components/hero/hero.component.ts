import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/main.service';
import { faEye, faThumbsUp, faLightbulb, faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  dataPhoto: any = {
    largeImageURL: '../../../assets/logo.png',
    userImageURL: '../../../assets/logo.png',
    user: 'Bolsiyo'
  }
  tags: any = []
  idToView: string = ''
  lightsOff: boolean = true
  fa_eye = faEye
  fa_like = faThumbsUp
  fa_lightbulb = faLightbulb
  fa_computer_mouse = faComputerMouse

  constructor(private mainService: MainService, private store: Store<any>) { }

  ngOnInit(): void {

    this.store.pipe(select('passDataDetail')).subscribe(dataPassed => {
      if (dataPassed.idElement) {
        this.dataPhoto = dataPassed.data
        this.idToView = dataPassed.idElement
        this.tags = this.dataPhoto.tags.split(',')
      }
    })
  }

  goToElement() {
    this.mainService.goToElementDOM(this.idToView ? this.idToView : 'filter')
  }

}
