import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient) { }

addQuestion(question:any){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.post(`${this.baseUrl}/addangular`,question,{
   headers,
   responseType:'text' as 'json'
 });
}
getQuestions(){
  let token=localStorage.getItem("token");
  let tokenStr='Bearer '+token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
 return this.http.get(`${this.baseUrl}/getangularQuestion`,{
   headers,
   responseType:'text' as 'json'
 });
}
}
