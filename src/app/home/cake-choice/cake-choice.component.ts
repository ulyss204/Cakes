import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-cake-choice',
  templateUrl: './cake-choice.component.html',
  styleUrls: ['./cake-choice.component.css'],
  providers: [
    GetApiService
    ]
})
export class CakeChoiceComponent implements OnInit {
  cake: any;
  id: any;
  statusCode: any;
  constructor(private _getApiService: GetApiService, private router: Router, private route: ActivatedRoute) { 
    this.cake = { 
      name: '',
      comment: '',
      yumFactor: ''
    }
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
  
  addCake(){
    this._getApiService
    .createCake('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/', this.cake)
      .subscribe(
        successCode => {
            this.statusCode = successCode;
        },
        err => this.logError(err),
        () => {
          console.log(this.statusCode);
          this.router.navigate(['/home']);
          console.log(this.cake);
        }
    );
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
