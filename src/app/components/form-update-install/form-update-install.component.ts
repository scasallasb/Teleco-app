import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import {InstalacionDetailsService} from '../../services/instalacion-details.service';

@Component({
  selector: 'app-form-update-install',
  templateUrl: './form-update-install.component.html',
  styleUrls: ['./form-update-install.component.css']
})
export class FormUpdateInstallComponent implements OnInit {
    formsServiceInstalacion:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
