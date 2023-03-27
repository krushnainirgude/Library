import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

removeToken(){
localStorage.removeItem("access_token");
}
}