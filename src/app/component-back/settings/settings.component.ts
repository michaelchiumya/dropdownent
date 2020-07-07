import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { PortalAuthService } from 'src/app/services/portal-auth.service';
import { Admin } from 'src/app/interface/admin';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  Admin = new Admin;
  updateSuccess : any;
  updatePassSuccess : any;
  updateError: any;
  updatePassError: any;

  updateForm: FormGroup;
  updatePasswordForm:FormGroup;

  constructor(
   private _fb: FormBuilder,
   private  _AdminService : AdminService,
   private _PortalAuth: PortalAuthService
  ) { }

  ngOnInit(): void
  {


    this._PortalAuth.userDetails().subscribe((data)=>{
       this.Admin  = data
     })

    this.updateForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]] });

      this.updatePasswordForm = this._fb.group({
        password: ['', [Validators.required]],
        password_confirmation: ['', [Validators.required]] });

       this.loadAdmin();

  }

loadAdmin()
{
   this._PortalAuth.userDetails().subscribe((data)=>{
     this.Admin = data
  })
}

  UpdateFormSubmit()
  {
     if(this.updateForm.valid)
       {
          this._AdminService.update(this.updateForm.value, this.Admin.id).subscribe(
              response=>{ this.updateSuccess=response},
              error  => { this.updateError=error}
          );
       }
  }

  UpdatePasswordSubmit()
 {
    if(this.updatePasswordForm.valid)
      {
        this._AdminService.updatePassword(this.updatePasswordForm.value, this.Admin.id).subscribe(
           response=>{ this.updatePassSuccess=response},
           error  => { this.updatePassError=error}
       );
        this.updatePasswordForm.reset
      }
 }


}
