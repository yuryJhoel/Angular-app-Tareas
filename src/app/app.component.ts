import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  msg:string = "";

  employees = [
    {'name' : 'Yury', position : 'manager', email:"Yury@gmail.com"},
    {'name' : 'Pedro', position : 'Designer', email:"Pedro@gmail.com"},
    {'name' : 'Carol', position : 'Progammer', email:"Carol@gmail.com"}
  ]
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  

  addEmployee():void {
    this.employees.push(this.model);
    this.msg = "Campo Agreagado";
  }
  deleteEmployee(i):void {
    var answer = confirm("Estas seguro querer eliminarlo");
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = "Campo eliminado";
    }
    
  }
  myValue;
  editEmployee(i):void {
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i ;
    this.hideUpdate = false;
  }
  updateEmployee():void {
    let i = this.myValue;

    for(let j = 0; j < this.employees.length; j++) {
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = "Campo actualizado";
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg="";
  }

}
