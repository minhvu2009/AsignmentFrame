import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private http:HttpClient, 
    private router:Router 
  ) {}

  onCreate(project: any): void {
    let apiUrl = 'http://localhost:3000/projects';


    this.http.post(apiUrl,project).subscribe( res => {
      if (res) {
        alert('Thêm mới thành công');

        this.router.navigate(['/list']);
      }
    })   
  }
}
