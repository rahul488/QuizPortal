import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/Service/java.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  question={
    ques:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:''
  }

  constructor(private javaService:JavaService) { }


  ngOnInit(): void {
    
  }
  saveQuestion(){
    this.javaService.addQuestion(this.question).subscribe(
      (data:any) => {
        console.log('adding javaQuestion',data);
        Swal.fire('success','Question Saved','success');
      },
      error=>{
        Swal.fire('error',"Authorization Failed",'error');
      }
    )
  }
  getQusns(){
    this.javaService.getQuestions().subscribe(
      data=>{
        console.log("questions are",data);
      }
    )
  }

}
