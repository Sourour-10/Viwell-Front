import { Component, OnInit } from '@angular/core';


import {executeNgPackagrBuilder} from '@angular-devkit/build-angular';
import {Coach} from '../Model/Coach';
import {CoachService} from '../Service/Coach/coach.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  CoachForm: FormGroup;
  submitted = false;

  listCoaches: any ;
  form = true;
  coach!: Coach ;
  closeResult!: string ;


  constructor( private coachService: CoachService , private formBuilder: FormBuilder   ) { }

  ngOnInit(): void {

    this.coachService.getAllCoaches().subscribe(res => {
          console.log(res);
          this.listCoaches = res;
        }

    );
    // @ts-ignore
    // @ts-ignore
    this.CoachForm = this.formBuilder.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(8)]],
      hourlyRate: ['', Validators.required],

    });

    this.coach = {
      coachId : null ,
      name : null ,
      domain : null ,
      mail : null ,
      phoneNumber : null ,
      hourlyRate: null

    };
  }
  get f() { return this.CoachForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CoachForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CoachForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.CoachForm.reset();
  }
  getAllCoaches() {
    this.coachService.getAllCoaches().subscribe(res => this.listCoaches = res );

  }
  addCoach( c: any) {
    this.coachService.addCoach(c)
        .subscribe(() => {
          this.getAllCoaches();
          this.form = false;

        });
  }

  updateCoach( c: any) {
    this.coachService.updateCoach(c).subscribe();
  }
  deleteCoach( idCoach: any) {
    this.coachService.deleteCoach(idCoach).subscribe(() => this.getAllCoaches());
  }






}

