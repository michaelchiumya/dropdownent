import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactError: any;
  contactSuccess: any;

  constructor(
    private fb: FormBuilder,
    private ContactService: ContactService
  ) { }

  ngOnInit(): void
  {
    this.contactForm =  this.fb.group({
      email: ['', [Validators.required,Validators.email ]],
      name: ['',Validators.required],
      body: ['',Validators.required],
     });
  }


onContactSubmit()
{
      if(this.contactForm.valid)
      {
          this.ContactService.send(this.contactForm.value).subscribe(
            (res)=>
               {
                this.contactSuccess = res;
               },
            (error)=>
             {
               this.contactError = error;
             }

        );
      }
}

}
