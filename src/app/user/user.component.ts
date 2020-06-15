import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalService } from '../components/modal/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  users: any[] = [];
  constructor(private apiService: ApiService, private modalService: ModalService) { }

  ngOnInit() {
      return this.apiService.showUsers()
        .subscribe ((data: any[]) => this.users = data,
        err => console.log(err.message)
    );
  }

  openModal(id: string) {
      this.modalService.open('1');
  }

  closeModal(id: string) {
      this.modalService.close('1');
  }

}
