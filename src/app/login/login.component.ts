import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  @ViewChild('modal')
  private modalElRef;
  private modalInstanceRef
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })

    //modal
    this.modalInstanceRef = window['M'].Modal.init(this.modalElRef.nativeElement);
  }
  login() {
    const values = this.loginForm.value;
    this.commonService.loginWithEmailAndPassword(values.email, values.password)
      .then(data => {
        console.log(data);
      }).catch((er) => {
        this.modalInstanceRef.open();
      })
  }
}
