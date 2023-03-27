import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserDataModel } from '../user-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  type:string="password";
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!: FormGroup
  
  Check=false;
  eyeslash: any;
  constructor(private router:Router, private api:ApiService){}
  
  onSubmit() {
  console.log(this.loginForm)
  }
  
  email_idRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  
  ngOnInit(){
    this.loginForm= new FormGroup({
      'Email_Id': new FormControl(null,[Validators.pattern(this.email_idRegex),Validators.required]),
      'Password': new FormControl(null,[Validators.maxLength(8),Validators.pattern(this.passwordRegex),Validators.required]),
    });
    }
    hideShowPass(){
      this.isText= !this.isText;
      this.isText ?this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
      this.isText ?this.type="text": this.type="password";
      }
  
  email_id!:string;
  password!:string;
  userdata:UserDataModel[]=[];
  
  OnLogin(){
    this.api.getAllUser_Data().subscribe
    (res=>{
      console.log(res);
      this.userdata=res;
      console.log(this.loginForm.value.Email_Id);
      for(let i=0;i<this.userdata.length;i++){
        if(this.loginForm.value.Email_Id==this.userdata[i].Email_Id 
        && this.loginForm.value.Password==this.userdata[i].Password)
        {
           this.Check=true;
          this.router.navigate(['/booktype/home'])
        }else{
          console.log("form is Not Valid")
        }
      }
    }
    )
  }
   }
  