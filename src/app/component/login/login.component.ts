import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalAuthService } from 'src/app/services/portal-auth.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   token : string= '';
   portalForm :FormGroup;
   loginError: any;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private PortalAuth: PortalAuthService
    ) { }

  ngOnInit(): void
   {
       this.portalForm =  this.fb.group({
          email: ['', [Validators.required,Validators.email ]],
          password: ['',Validators.required]
         });
       this.loggedInCheck();
  }


onPortalSubmit()
{
      if(this.portalForm.valid)
      {
          this.PortalAuth.login(this.portalForm.value).subscribe(
            (res)=>
               {
                 if (res.status == 200)
                {
                  this.token = res.body['success'].token;
                  sessionStorage.setItem('token', this.token);
                  this.PortalAuth.userDetails().subscribe();
                  this.router.navigateByUrl('admin');
                }
             },
            (error)=>
             {
               this.loginError = error;
             }

        )
      }
}

loggedInCheck()
{
   if(sessionStorage.getItem('token'))
    {
      this.router.navigate(['/admin'])
   }
}

}




