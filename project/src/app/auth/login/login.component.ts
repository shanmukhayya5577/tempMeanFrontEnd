import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup;
  submitted!:false;

  constructor(private fb:FormBuilder,private route:Router,
    private service:AuthserviceService,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    })
  }

  // LoginSubmit(){
  //   const reqbody = {
  //     email:this.LoginForm.get('email')?.value,
  //     password:this.LoginForm.get('password')?.value
  //   }
  //   if(this.LoginForm.valid){
  //     this.service.getLoginApi(reqbody).subscribe((res:any)=>{
  //       if(res.error == false){
  //         this.toast.success('Login Successfull')
  //         // console.log(res)
  //         this.route.navigate(['dashboard'])
  //     }else {
  //       this.toast.error('provided email and password is wrong')
  //     }
  //     })
  //   }
  // }

  LoginSubmit(){
  this.route.navigate(['dashboard'])
  }

  register(){
    this.route.navigate(['register'])
  }

}
