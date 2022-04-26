import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';

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

  private updateUser() {
    this.service.update(this.id, this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
             //   this.alertService.success('Update successful', { keepAfterRouteChange: true });
                this.router.navigate(['/profile'], { relativeTo: this.route });
            },
            error: error => {
               // this.alertService.error(error);
                this.loading = false;
            }
        });
}

}
