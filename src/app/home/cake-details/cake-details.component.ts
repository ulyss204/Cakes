import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css'],
  providers: [
    GetApiService
    ]
})
export class CakeDetailsComponent implements OnInit {
  cakeDetails: Object;
  constructor(private _getApiService: GetApiService, private router: Router, private route: ActivatedRoute) { }
  
  logError(err) {
    console.error('There was an error: ' + err);
  }
  private getData(id = '') {
    this._getApiService
    .getCake('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/', id)
      .subscribe(
        data => {
            this.cakeDetails = data;
        },
        err => this.logError(err),
        () => {
          console.log(this.cakeDetails);
        }
    );
  }
  goToTheList(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
   let id = this.route.snapshot.paramMap.get('id');
    this.getData(id);
  }

}
