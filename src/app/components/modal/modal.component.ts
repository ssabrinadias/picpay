import { Component, ElementRef, Input, OnInit, } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }
  ngOnInit() {
  }

}
