import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.showUsers().subscribe((data: any[]) => {
        this.users = data;
      }
    );
  }

}
