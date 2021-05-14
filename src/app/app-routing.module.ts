import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { AddTopicsComponent } from './Components/add-topics/add-topics.component';
import { AngularComponent } from './Components/angular/angular.component';
import { CComponentComponent } from './Components/c-component/c-component.component';
import { DjangoComponent } from './Components/django/django.component';
import { ExamPaperComponent } from './Components/exam-paper/exam-paper.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetDetailsComponent } from './Components/get-details/get-details.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { InstructionComponent } from './Components/instruction/instruction.component';
import { JavaComponent } from './Components/java/java.component';
import { LoginComponent } from './Components/login/login.component';
import { PythonComponent } from './Components/python/python.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { ShowQuestionComponent } from './Components/show-question/show-question.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SuperUserComponent } from './Components/super-user/super-user.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';
import { ExamGuardGuard } from './exam-guard.guard';

const routes: Routes = [

{path:'',component:HomePageComponent},
{path:'home',component:HomePageComponent},
{path:'addTopic',component:AddTopicsComponent,canActivate:[AuthGuard]},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'forgotPassword',component:ForgotpasswordComponent},
{path:'instruction',component:InstructionComponent,canActivate:[AuthGuard]},
{path:'admin',component:SuperUserComponent},
{path:'addqusn',component:AddQuestionComponent,canActivate:[AuthGuard]},
{path:'Java',component:JavaComponent,canActivate:[AuthGuard]},
{path:'C',component:CComponentComponent,canActivate:[AuthGuard]},
{path:'Django',component:DjangoComponent,canActivate:[AuthGuard]},
{path:'Angular',component:AngularComponent,canActivate:[AuthGuard]},
{path:'Python',component:PythonComponent,canActivate:[AuthGuard]},
{path:'topic',component:TopicsComponent,canActivate:[AuthGuard]},
{path:'exam/:keyword',component:ExamPaperComponent,canActivate:[ExamGuardGuard]},
{path:'getDetails',component:GetDetailsComponent,canActivate:[AuthGuard]},
{path:'changepassword',component:RecoverPasswordComponent},
{path:'showquestion/:keyword',component:ShowQuestionComponent,canActivate:[AuthGuard]},
{path:'userhome',component:UserdashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
