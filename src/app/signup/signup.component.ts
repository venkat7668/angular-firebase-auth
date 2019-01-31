import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { CommonService } from '../common/services/common.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private commonService: CommonService, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      "first_name": new FormControl('', [Validators.required]),
      "last_name": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required])
    })
  }

  signup() {
    const values = this.signupForm.value;
    this.commonService.signupWithEmailAndPassword(values.email, values.password).then((data) => {
      const user_collection = this.db.collection('users');
      values['id'] = data.user['uid'];
      return user_collection.add(values)
    }).then((data) => {
      console.log(data);
      this.router.navigate(['/home'])
    });
  }

}
