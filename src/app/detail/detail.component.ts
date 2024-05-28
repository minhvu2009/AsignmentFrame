import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  id: Number = 0;
  project: any = {};
  constructor(private route: ActivatedRoute, private thaivm2: HttpClient) {
    this.id = this.route.snapshot.params['project'];
  }

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects/' + this.id;
    this.thaivm2.get(apiUrl).subscribe((res) => {
      this.project = res;
    });
  }
}
