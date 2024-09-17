import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from 'src/model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeForm : FormGroup= new FormGroup({});

  employeeObj : Employee = new Employee();

  employeeList : Employee[] = [];

  index: number =1;

  constructor(){
    this.createForm();
    debugger;
    const oldData=localStorage.getItem("EmpData");
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeList=parseData;
    }
  }


  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      email: new FormControl(this.employeeObj.email),
      address: new FormControl(this.employeeObj.address),
      contact: new FormControl(this.employeeObj.contact),
      pinCode: new FormControl(this.employeeObj.pinCode)

    })
  }

  onSave(){
    debugger;
    const oldData = localStorage.getItem("EmpData");
   
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length+1);
      this.employeeList.unshift(this.employeeForm.value);
    }else{
      this.employeeList.unshift(this.employeeForm.value);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  }

  clear(){
    localStorage.clear;
    //alert("cleared");
    console.log(this.employeeList);
    this.employeeList = [];
  }

}
