import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean=false;
  user:User= new User();
  constructor(private builder:FormBuilder, private service:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.builder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    // if(this.registerForm.invalid)
    //   return;
    // else{
    //     this.service.addUser(this.user).subscribe(x=>console.log(x))
    //     alert("product added successfully")
        //this.router.navigate(['list'])
        alert("You're logged in!");
      }
     


}
