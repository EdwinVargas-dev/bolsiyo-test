import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private mainUrl = 'https://pixabay.com/api/'
  private mainKey = '13119377-fc7e10c6305a7de49da6ecb25'

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<any> {
    return this.http.get(`${this.mainUrl}?key=${this.mainKey}`)
  }

  getPhotosByCategory(category: string): Observable<any> {
    return this.http.get(`${this.mainUrl}?key=${this.mainKey}&category=${category}`)
  }

  getPhotosByText(text: string): Observable<any> {
    return this.http.get(`${this.mainUrl}?key=${this.mainKey}&lang=es&q=${text}`)
  }

  goToElementDOM(element:string) {
    window.document.getElementById(element)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
