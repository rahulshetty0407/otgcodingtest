import {Component, OnInit} from '@angular/core';
import {Album} from './albums';
import {AlbumService} from './album.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // album: Album[];
  map: Map<number, Album> = new Map<number, Album>();

  constructor(private albumservice: AlbumService) {

  }
  ngOnInit() {
      this.map = this.albumservice.priceListMap;
  }


  getKeys() {
    console.log('hello');
    return Array.from(this.map.keys());
  }
}
