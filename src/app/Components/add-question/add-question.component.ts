import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Topic } from 'src/app/Common/topic';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  topic:Topic[]=[];

  constructor(private userService:UserService) { }

  showFiller = false;

  isShowtopics:boolean=false;

  isUser=false;

  ngOnInit(): void {
    this.getRoleofUser(localStorage.getItem('user'))
  }
  getRoleofUser(name: string) {
   
    this.userService.getRole(name).subscribe(
      data=>{
          if(data == 'USER'){
            Swal.fire('error',"You are not authorized",'error');
            let stopIn=setInterval(()=>{
               window.location.href="/instruction";
            },2000)
          }
          else{
            this.getAll();
          }
      } 
    )

  }
  getAll() {
    this.userService.getTopics().subscribe(
      data=>{
        this.topic=data;
      }
    )
  }
  
 
  logout(){
    this.userService.logout();
    location.reload();
  }

}
