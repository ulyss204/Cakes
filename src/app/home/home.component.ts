import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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

  constructor(private _getApiService: GetApiService, private router: Router) {
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
  
  getDetails(id){
    this.router.navigate(['/home', id]);
  }
   addCake(){
    this.router.navigate(['/home/choice']);
  }
  ngOnInit() {
    this.getData();
  }

}
