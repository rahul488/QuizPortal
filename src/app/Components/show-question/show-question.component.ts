import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/Common/question';
import { AngularService } from 'src/app/Service/angular.service';
import { CService } from 'src/app/Service/c.service';
import { DjangoService } from 'src/app/Service/django.service';
import { JavaService } from 'src/app/Service/java.service';
import { PythonService } from 'src/app/Service/python.service';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  questions:Question[]=[];
  ans:string;
  id:number

  keyword:string;
  constructor(private javaService:JavaService,
              private cService:CService,
              private angularService:AngularService,
              private djangoService:DjangoService,
              private pythonService:PythonService,
              private route:ActivatedRoute,
              private userService:UserService) { }

  ngOnInit(): void {
   this.getRoleofUser(localStorage.getItem('user'));
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
            this.getQsn();
          }
      } 
    )

  }
  getQsn() {
    this.keyword=this.route.snapshot.paramMap.get('keyword');

    if(this.keyword == 'Java'){
      this.javaService.getQuestions().subscribe(
        (data:any) => {
          this.questions=data;
          console.log("question is",data);
        }
      )
    }
    else if(this.keyword == 'Python'){
      this.pythonService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'Django'){
      this.djangoService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'Angular'){
      this.angularService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'C'){
      this.cService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
          console.log('question is',data);
        }
      )
    }

  }

}
