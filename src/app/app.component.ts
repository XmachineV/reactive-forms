import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from './model/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  pessoa = new Pessoa;
  control: FormGroup;
  constructor(translate: TranslateService, private builder: FormBuilder) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.control = builder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required]
    });
  }

  save() {


  }
}


