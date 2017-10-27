import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    GetApiService
    ]
})

export class HomeComponent implements OnInit {
  cakesList: Object;

  constructor(private _getApiService: GetApiService) {
   }

  logError(err) {
    console.error('There was an error: ' + err);
  }
  private getData(id = '') {
    this._getApiService
    .getCake('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/', id)
      .subscribe(
        data => {
            this.cakesList = data;
        },
        err => this.logError(err),
        () => {
          console.log(this.cakesList);
        }
    );
  }

  ngOnInit() {
    this.getData();
  }

}
