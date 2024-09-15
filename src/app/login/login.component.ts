import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  department:any[]=[] 
  DeptObj:any={
    "departmentName":"",
    "departmentLogo":"",
  };
   http=inject(HttpClient)
   ngOnInit(): void {
       this.getData()
   }

  getData(){
      this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result:any)=>{
        
      })
  }
  onSubmit(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.DeptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Sucessfully Created Record ")
        this.getData()
      }
      else{
        alert(res.error);
      }
    })
  }
  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.DeptObj).subscribe((res:any)=>{
      if(res.result){
        alert("Sucessfully Updated Record ");
        this.getData();
      }
      else{
        alert(res.error);
      }
    })
  }
  onDelete(id:any){
    const  isDelete= confirm("You need to delete this Record?")
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
        if(res.result){
          alert("Sucessfully Deleted Record ");
          this.getData();
        }
        else{
          alert(res.error);
        }
      })
      }
    }
}
