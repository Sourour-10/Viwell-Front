import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AdduserService } from "src/app/Service/User/adduser.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class ResetPasswordComponent implements OnInit {

  closeResult: string;
  checkoutParentGroup: FormGroup;
  checkoutParentGroupReset: FormGroup;
  enableForm: boolean = true;
  constructor(
    private formChildGroup: FormBuilder,
    private auth: AdduserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.myFormLogin();
    this.myFormLoginReset();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  myFormLogin() {
    this.checkoutParentGroup = this.formChildGroup.group({
      user: this.formChildGroup.group({
        email: new FormControl("", [
          Validators.required,

          Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),
        ]),
      }),
    });
  }
  myFormLoginReset() {
    this.checkoutParentGroupReset = this.formChildGroup.group({
      newUser: this.formChildGroup.group({
        code: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
      }),
    });
  }
  get code() {
    return this.checkoutParentGroupReset.get("newUser.code");
  }

  get password() {
    return this.checkoutParentGroupReset.get("newUser.password");
  }

  get email() {
    return this.checkoutParentGroup.get("user.email");
  }

  done() {
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched();
      return;
    }
    this.auth
      .checkEmail(this.checkoutParentGroup.controls["user"].value.email)
      
      .subscribe((response) => {
      
        console.log(this.enableForm);
      });
      this.enableForm = false;
  }

  resetNewPassword() {
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched();
      return;
    }
    this.auth
      .ResetPassword(
        this.checkoutParentGroup.controls["user"].value.email,
        this.checkoutParentGroupReset.controls["newUser"].value.code,
        this.checkoutParentGroupReset.controls["newUser"].value.password
      )
      .subscribe(() =>{ 
        
        window.location.reload();
       }
         
        
      );
  }
}
