import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Simple Form';
  desigArray:any[]=[];
  nameArray:any[]=[];
  defaultDesignation="Mr"


  

  @ViewChild('f') singupForm:NgForm;

  constructor(private formService:FormService,private formDataservice:FormdataService){}

  ngOnInit(){

    this.desigArray= this.formService.title


  }
  onSubmit(form:NgForm){

    let user={
      fname:form.value.fname,
      lname:form.value.lname,
      email:form.value.email,
      designation:form.value.select,
    }
    

    this.formDataservice.addData(user);
    this.nameArray= this.formDataservice.getData();
    console.log(this.nameArray);
    

  }
}
