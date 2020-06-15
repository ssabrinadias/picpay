import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss']
})
export class ItemUserComponent implements OnInit {
  @Input() name;
  @Input() url;
  @Input() img;
  @Input() username;
  @Input() id;
  ngOnInit() {

  }
}
