import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../common/services/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private commonService:CommonService) { }

  ngOnInit() {
  }
  logout() {
    this.commonService.logout();
  }
}
