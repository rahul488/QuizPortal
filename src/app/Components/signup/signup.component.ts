import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    firstName:'',
    lastName:'',
    userName:'',
    password:''
  }

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  doregister(){
    this.userservice.userRegister(this.user).subscribe(
      data => {
      console.log('data is'+data);
      Swal.fire('Success','user is registered','success');
      },
      error=>{
        console.log(error);
        Swal.fire('error','UserName already exist','error');
      }
    );
  }

}
