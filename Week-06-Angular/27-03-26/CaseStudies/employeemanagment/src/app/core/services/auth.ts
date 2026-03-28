import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedin=false;
  login(username:string,password:string){
    if(username==='admin'&& password==='admin'){
      this.isLoggedin=true;
      localStorage.setItem('token','dummytoken')
      return true
    }
    return false
  }
  logout(){
    this.isLoggedin=false
    localStorage.removeItem('token')
  }
  isAuthentiactaion():boolean{
    return !!localStorage.getItem('token')
  }
}

