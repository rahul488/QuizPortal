import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { CComponentComponent } from './Components/c-component/c-component.component';
import { JavaComponent } from './Components/java/java.component';
import { PythonComponent } from './Components/python/python.component';
import { AngularComponent } from './Components/angular/angular.component';
import { DjangoComponent } from './Components/django/django.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { SuperUserComponent } from './Components/super-user/super-user.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { InstructionComponent } from './Components/instruction/instruction.component';
import { GetDetailsComponent } from './Components/get-details/get-details.component';
import { ExamPaperComponent } from './Components/exam-paper/exam-paper.component';
import {MatListModule} from '@angular/material/list';
import {  MatIconModule} from '@angular/material/icon';
import { AddTopicsComponent } from './Components/add-topics/add-topics.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { ShowQuestionComponent } from './Components/show-question/show-question.component';
import { MatSortModule } from '@angular/material/sort';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddQuestionComponent,
    CComponentComponent,
    JavaComponent,
    PythonComponent,
    AngularComponent,
    DjangoComponent,
    ForgotpasswordComponent,
    HomePageComponent,
    SuperUserComponent,
    TopicsComponent,
    InstructionComponent,
    GetDetailsComponent,
    ExamPaperComponent,
    AddTopicsComponent,
    RecoverPasswordComponent,
    ShowQuestionComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
