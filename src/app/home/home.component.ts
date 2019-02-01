import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../common/services/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userMetaData;
  public userDetails;

  constructor(private angularFireAuth: AngularFireAuth, private commonService: CommonService) { }

  ngOnInit() {
    this.userMetaData = this.commonService.getUserMetaData;
    this.commonService.getUserDetails().subscribe(data => {
      this.userDetails = data[0];
    })
  }

  logout() {
    this.commonService.logout();
  }

}
