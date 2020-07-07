import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  addAdminForm : FormGroup;

  addAdminError: any;
  addAdminSuccess: any;

  constructor(private _AdminService : AdminService, private fb: FormBuilder) {}

  ngOnInit(): void
  {
    this.addAdminForm =  this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]]
    });
  }

  addAdminSubmit()
  {
    if(this.addAdminForm.valid)
  {
     this.addAdminForm.addControl('password', new FormControl('', Validators.required));
     this.addAdminForm.addControl('password_confirmation', new FormControl('', Validators.required));

     this.addAdminForm.get('password').setValue('pa55word');
     this.addAdminForm.get('password_confirmation').setValue('pa55word');

     this._AdminService.post(this.addAdminForm.value).subscribe(
       (data)=> {this.addAdminSuccess = data},
       (error)=>{ this.addAdminError= error}
     );
       this.addAdminForm.reset();
  }

  }

}
