import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/Common/answer';
import { Question } from 'src/app/Common/question';
import { AngularService } from 'src/app/Service/angular.service';
import { CService } from 'src/app/Service/c.service';
import { DjangoService } from 'src/app/Service/django.service';
import { JavaService } from 'src/app/Service/java.service';
import { PythonService } from 'src/app/Service/python.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.css']
})
export class ExamPaperComponent implements OnInit {

  questions:Question[]=[];
  ans:string;
  id:number
  totalmark:number=0;
  userAnswer:Answer[]=[];
  ua:Answer[]=[];
  count=2;
  track:boolean=true;
 

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  currentQuestion:Question;


 keyword:string;
  constructor(private javaService:JavaService,
              private cService:CService,
              private angularService:AngularService,
              private djangoService:DjangoService,
              private pythonService:PythonService,
              private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.getQsn();
    this.timer();
  }
  getQsn() {
  
    this.keyword=this.route.snapshot.paramMap.get('keyword');

    if(this.keyword == 'java'){
      this.javaService.getQuestions().subscribe(
        (data:any) => {
          this.questions=data;
          console.log("question is",data);
        }
      )
    }
    else if(this.keyword == 'python'){
      this.pythonService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'django'){
      this.djangoService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'angular'){
      this.angularService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
        }
      )
    }
    else if(this.keyword == 'c'){
      this.cService.getQuestions().subscribe(
        (data : any)=>{
          this.questions=data;
          console.log('question is',data);
        }
      )
    }

  }
 
  getResult(event:any){
    console.log('form value is',event.target.value);

    this.ans=event.target.value;
    this.id=+this.ans.charAt(0);
    this.ans=this.ans.substring(1);
  
    const index=this.id-1;

      for(let question of this.questions){   
        if(question.id == this.id){
            this.currentQuestion=question;
        }
      }
      if(this.userAnswer[index] == null){
        this.userAnswer[index]=new Answer();
        this.userAnswer[index].questionId=this.currentQuestion.id;
        this.userAnswer[index].correctAns=this.currentQuestion.ans;
        this.userAnswer[index].userAns=this.ans;
     }
      if(this.ans == this.currentQuestion.ans){
        
         this.userAnswer[index].status="Correct";
      }
      else if(this.ans != this.currentQuestion.ans){
        
         this.userAnswer[index].status="Wrong";
      }
      
  }
  timer(){
    let stopIn=setInterval(()=>{
      if(this.count == 0){
        this.count=0;
        clearTimeout(stopIn);
        this.endXam();
      }else
      {--this.count;}
    },60000)
  }
  endXam(){
   console.log("your anser",this.userAnswer)
    for(let userResult of this.userAnswer){
      if(userResult !=null &&  userResult.status == 'Correct'){
        this.ua.push(userResult);
      this.totalmark++;
    }
    }
    localStorage.setItem('mark',''+this.totalmark);
    localStorage.setItem("result",JSON.stringify(this.ua));
    if(this.totalmark <= 0){
      //alert('your score is '+this.totalmark)
      Swal.fire('error',"You are fail",'error');
    }else{
      //alert('your score is '+this.totalmark)
      Swal.fire('Sucess',"You are Pass",'success');
    }
    let stopIn=setInterval(()=>{
    window.location.href="/getDetails"
    },2000)
  }

  checkCount(){
    if(this.count == 0){
      this.track=false;
      this.endXam();
    }
  }
}
