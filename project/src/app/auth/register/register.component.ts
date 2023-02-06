import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  submitted:boolean=false

  constructor(private fb:FormBuilder,private service:AuthserviceService,private toastr:ToastrService,
    private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:this.fb.control('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      email:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    })
  }

  get name(){
    return this.registerForm.get('name')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

  registerSubmit(){
    this.submitted=true
    const reqbody = {
      name:this.registerForm?.get('name')?.value,
      email:this.registerForm?.get('email')?.value,
      password:this.registerForm.get('password')?.value
    }

    if(this.registerForm.valid){
      console.log('register data',this.registerForm.value);
        this.service.getReisterApi(reqbody).subscribe((res:any)=>{
          if(res.error==false && res.data){
            this.toastr.success('Register sucess')
            // console.log('success');
            this.route.navigate(['login'])
          }else{
            this.toastr.error(res.message);
            console.log('message');
          }
        },(error:any)=>{
          if (error.error) {
            this.toastr.error(error.message)
            console.log('err');
          }
        })
      }
  }
  login(){
    this.route.navigate(['login'])
  }

}
