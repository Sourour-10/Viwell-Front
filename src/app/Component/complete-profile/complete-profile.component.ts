import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, first, map, of } from 'rxjs';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {
  form: any ={};
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';

  
 // file: File = {
   // data: null,
    //inProgress: false,
    //progress: 0
  //};

  constructor(private modalService: NgbModal, private service:AdduserService ,  private route: ActivatedRoute,
    private router: Router,) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  
}


  ngOnInit(): void {
 
  }
 // get f() { return this.form.controls; }

  public updateUser() {
    this.service.update(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
             //   this.alertService.success('Update successful', { keepAfterRouteChange: true });
             console.log("updated");
                this.router.navigate(['/user-profile'], { relativeTo: this.route });
            },
            error: error => {
               // this.alertService.error(error);
               console.log('erreuuuur')
                this.loading = false;
            }
        });
}
/*uploadFile() {
  const formData = new FormData();
  formData.append('file', this.file.data);
  this.file.inProgress = true;

  this.service.uploadProfileImage(formData).pipe(
    map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.file.progress = Math.round(event.loaded * 100 / event.total);
          break;
        case HttpEventType.Response:
          return event;
      }
    }),
    catchError((error: HttpErrorResponse) => {
      this.file.inProgress = false;
      return of('Upload failed');
    })).subscribe((event: any) => {
      if(typeof (event) === 'object') {
        this.form.patchValue({profileImage: event.body.profileImage});
      }
    })
}*/
}
