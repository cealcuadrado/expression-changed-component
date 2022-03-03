import { ModalLoaderComponent } from './../modal-loader/modal-loader.component';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  currentModal: NgbModalRef;

  constructor(
    private modal: NgbModal
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.currentModal = this.modal.open(ModalLoaderComponent, {
      centered: true,
      backdrop: false,
    });

    return next.handle(request).pipe(
      finalize(() => this.currentModal.close())
    );
  }
}
