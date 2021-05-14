import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent implements OnInit {

  
  credentials={
    userName:'',
    password:''
  }
  userRole:string
  role:boolean=true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  checkRole(){
 
    if((this.credentials.userName != '' && this.credentials.password != '')
    && (this.credentials.userName != null && this.credentials.password != null)){
 
      this.userService.getRole(this.credentials.userName).subscribe(
        (res:any)=>{
          this.userRole=res;
          if(this.userRole =='USER'){
            Swal.fire('error',"Authorization Failed",'error');
          }
          else{
            this.adminLogin();
          }
        }
      );
    
   }
 }
   adminLogin(){
       this.userService.login(this.credentials).subscribe(
         data=>{
           localStorage.setItem("user",this.credentials.userName);
           this.userService.loginUser(data);
           window.location.href="/addqusn";
         }
       )
     }
   

}
