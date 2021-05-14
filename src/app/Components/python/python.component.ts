import { Component, OnInit } from '@angular/core';
import { PythonService } from 'src/app/Service/python.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  
  question={
    ques:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:''
  }


  constructor(private pythonService:PythonService) { }

  ngOnInit(): void {
  }

  saveQuestion(){
    this.pythonService.addQuestion(this.question).subscribe(
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
    this.pythonService.getQuestions().subscribe(
      data=>{
        console.log("questions are",data);
      }
    )
  }

}
