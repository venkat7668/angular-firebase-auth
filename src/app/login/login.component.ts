import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  login() {
    this.commonService.loginWithEmailAndPassword('venkat7668@gmail.com', 'venkat')
    .then(data=>{
      console.log(data)
    })
  }
}
