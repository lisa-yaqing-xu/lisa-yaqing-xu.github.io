import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ '../../styles/body.scss', './contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    subject: ["", Validators.required],
    _gotcha:[""],
    message: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private http:Http) { }

  ngOnInit() {
  }

  submit($event){
    console.log($event);
    console.log(this.contactForm.value);

    this.http.post('http://formspree.io/lisa.yaqing.xu@gmail.com', this.contactForm.value).subscribe((resp)=>{
      console.log('test');
    });
  }

}
