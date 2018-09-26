import { Injectable } from '@angular/core';
import {Album} from './albums';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  priceListMap: Map<number, Album> = new Map<number, Album>();
  album: Album[];
  private userUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {
    const obs = this.http.get<Album[]>(this.userUrl);
    obs.subscribe((response) => {
      console.log('hello value');
      this.album = response;
      console.log('hello value1');
      // this.album.forEach((value) => {
      response.forEach((value) => {
        console.log('hello value2');
        this.priceListMap.set(value.id, value);

      });
      console.log('hello value3');

    });
  }
  // public getAlbums() {
  //   console.log('hello service');
  //   return this.http.get<Album[]>(this.userUrl);
  // }
  getKeys(map) {
    console.log('hello');
    return Array.from(map.keys());
  }
}
