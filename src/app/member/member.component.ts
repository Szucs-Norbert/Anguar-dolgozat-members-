/*
* File: member.components.ts
* Author: Szűcs Norbert
* Copyright: 2022, Szűcs Norbert
* Group: Szoft II/N
* Date: 2022-03-31
* Github: https://github.com/Szucs-Norbert/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {


  memberForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group( {
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
    });    

  }

  saveMember() {
    alert(
      'Név: ' + this.memberForm.value.name + '\n' + 
      'Település:' + this.memberForm.value.city + '\n' +
      'Cím:' + this.memberForm.value.address + '\n' +
      'E-mail:' + this.memberForm.value.email

      );
  }

}
