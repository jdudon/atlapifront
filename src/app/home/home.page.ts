import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: ApiService) {
    console.log('pouit');
    this.service.getAllMaps().subscribe(res => {
      console.log(res);

    });
  }

  ngOnInit(): void {

    this.service.getOneMap(1).subscribe( res => {
      console.log(res);
    });

  }

}
