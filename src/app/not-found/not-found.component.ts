import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  list: any = [];
  constructor(private thaivm2: HttpClient) {}

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects';
    this.thaivm2.get(apiUrl).subscribe((res) => {
      this.list = res;
      console.log(this.list);
    });
  }
}
