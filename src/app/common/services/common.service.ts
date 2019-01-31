import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private authState: boolean = false;
    public redirectURL: string = '';

    constructor(private db: AngularFirestore, private angularFireAuth: AngularFireAuth, private router: Router) {
        this.angularFireAuth.authState.subscribe((state) => {
            console.log(state);
            this.authState = !!state;
            if (this.redirectURL) {
                this.router.navigate([this.redirectURL]);
            }
        })

    }

    signupWithEmailAndPassword(email: string, password: string) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    }

    loginWithEmailAndPassword(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.router.navigate(['/home']);
        })
    }

    logout(){
        return this.angularFireAuth.auth.signOut().then(()=>{
            this.router.navigate(['/login']);
        })
    }

    get isLoggedIn(): boolean {
        return this.authState;
    }
}