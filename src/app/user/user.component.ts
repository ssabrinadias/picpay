import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalService } from '../modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  users: any[] = [];
  userChoice: any;
  conclusion: string;
  statusConclusion: any = null;

  constructor(private apiService: ApiService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.apiService.showUsers()
        .subscribe ((data: any[]) => this.users = data,
        err => console.log(err.message)
    );
  }

  reciverFeedbackPay(conclusion) {
    this.statusConclusion = conclusion.status;
    console.log('Foi emitido o evento e chegou no pai >>>> ', conclusion);
  }

  verifyUser(idUser: number): any {
    return this.users.filter(item => idUser ===  item.id);
  }

  openModal(id: string, idUser: number): void {
    this.userChoice = (this.verifyUser(idUser) || []).pop();
    console.log(this.userChoice);
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.statusConclusion = null;
    this.modalService.close(id);
  }

}
