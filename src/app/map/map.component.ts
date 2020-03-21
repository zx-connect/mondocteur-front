import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapData} from './mapData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  drcDatas: MapData;

  constructor(
    private mapService: HttpClient
  ) { }

  ngOnInit(): void {
    this.mapService.get('https://api.covid19api.com/country/congo-(kinshasa)/status/confirmed')
      .subscribe((data: [MapData]) => {
        this.drcDatas = data.pop();
        console.log(data.pop());
      })
    ;
  }

}
