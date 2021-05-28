import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-words',
  templateUrl: './new-words.component.html',
  styleUrls: ['./new-words.component.scss']
})
export class NewWordsComponent implements OnInit {
  @Input() newWordsArray: string[] = [];


  constructor() {
  
  }

  ngOnInit(): void {

  }

}
