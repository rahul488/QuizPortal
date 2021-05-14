import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  
  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }

addQuestion(question:any){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.post(`${this.baseUrl}/adddjango`,question,{
   headers,
   responseType:'text' as 'json'
 });
}
getQuestions(){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.get(`${this.baseUrl}/getdjangoQuestion`,{
   headers,
   responseType:'text' as 'json'
 });
}
}
