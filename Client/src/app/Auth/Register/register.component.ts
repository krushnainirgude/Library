import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { UserDataModel } from '../user-data.model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerObj: UserDataModel=new UserDataModel();
  
  type: string="password";
  isText: boolean= false;
  eyeIcon: string="fa-eye-slash";
  registerFrom!: FormGroup;
  password:string;
  
  
  constructor(private formBuilder:FormBuilder, private api:ApiService,private router:Router,private http:HttpClient){ }
  
  registerForm: FormGroup;
  submitted=false;
  StringRegex=/[A-Za-z]/;
  numberRegex=/[0-9]/;
  email_idRegex="[a-z]+@gmail.com";
  passwordRegex="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"
  
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      Email_Id: ['',Validators.required,Validators.pattern(this.email_idRegex)],
      Password: ['',Validators.required,Validators.minLength(8),Validators.pattern(this.passwordRegex)],
      First_Name: ['',Validators.required,Validators.pattern(this.StringRegex)],
      Middle_Name:['',Validators.required],
      Sur_Name:['',Validators.required],
      Gender: ['',Validators.required],
      Date_Of_Birth: ['',Validators.required],
      Mobile: ['',Validators.required,Validators.minLength(10)],
      Address: ['',Validators.required],
      Pincode: ['',Validators.required,Validators.minLength(6)]
  
  
    })
  }
  hideShowPass(){
    this.isText= !this.isText;
    this.isText ?this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ?this.type="text": this.type="password";
    }
  
  OnRegister(){
    if(this.registerForm.valid){
  console.log(this.registerForm.value);
    }else{
      this.validateAllFormFileds(this.registerForm)
    }
  }
  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({
          onlySelf:true
        });
  
      }else if(control instanceof FormGroup){
  this.validateAllFormFileds(control)
      }
    })
  }
  postRegistationDetails(){
    this.registerObj.Email_Id = this.registerForm.value.emailid;
    this.registerObj.Password = this.registerForm.value.password;
    this.registerObj.First_Name = this.registerForm.value.firstname;
    this.registerObj.Middle_Name = this.registerForm.value.middlename;
    this.registerObj.Password = this.registerForm.value.password;
    this.registerObj.Sur_Name = this.registerForm.value.surname;
    this.registerObj.Gender = this.registerForm.value.gender;
    this.registerObj.Date_Of_Birth = this.registerForm.value.dateofbirth;
    this.registerObj.Mobile = this.registerForm.value.mobile;
    this.registerObj.Address = this.registerForm.value.address;
    this.registerObj.Pincode = this.registerForm.value.Pincode;
    
    this.api.postRegistationDetails(this.registerObj)
    .subscribe(res=>{
      console.log(res);
      alert("Registration Successfully")
      
      this.registerForm.reset();
    },
    err=>{
      alert("Something wrong")
    })
  }
  onRegister(){
    this.http.post<any>("http://localhost:3000/registerdata",this.registerForm.value);
    if(this.registerForm.valid){
  
    }else{
      this.validateAllFormFileds(this.registerForm)
    }
  }
  
    
  }