import { ModalLoaderComponent } from './../modal-loader/modal-loader.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {

  }

  openModal(): void {
    this.modal.open(ModalLoaderComponent, {
      centered: true,
      backdrop: false
    })
  }

}
