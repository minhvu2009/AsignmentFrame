import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  list: any = [];
  constructor(private thaivm2: HttpClient) {}

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects';
    this.thaivm2.get(apiUrl).subscribe((res) => {
      this.list = res;
      console.log(this.list);
    });
  }
  onDelete(id: any): void {
    if (confirm('Bạn có chắc ko?')) {
      let apiUrl = 'http://localhost:3000/projects/' + id;
      this.thaivm2.delete(apiUrl).subscribe((res) => {
        this.ngOnInit();
      });
    }
  }
}
