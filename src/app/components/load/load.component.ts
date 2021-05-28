import { I18nContext } from '@angular/compiler/src/render3/view/i18n/context';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { IText, IWord } from 'src/app/model/model';
import { LoadDictService } from 'src/app/services/load-dict.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  loadForm: FormGroup;
  newWordsForm: FormGroup;
  newWordsArray: FormArray = new FormArray([]);
  newText?: IText;
  wordsArray: string[] | null = null;

  constructor(private fb: FormBuilder, private loadDictService: LoadDictService) {
    this.loadForm = new FormGroup({
      textTitle: new FormControl(null, [Validators.required]),
      textContent: new FormControl(null, [Validators.required])
    });
    this.newWordsForm = new FormGroup({
      newWordsArray: this.newWordsArray
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newText = this.loadForm.value;
    if (this.newText) {
      this.loadDictService.addText(this.newText);
      this.translateText(this.newText?.textContent);
    }
    this.loadForm.reset();
   
  }

  translateText(text: string | undefined) {
    if (text) {
      this.wordsArray = _.uniq(_.words(text.toLowerCase()));
    }
    this.wordsArray?.forEach(() => {
      this.newWordsArray.push(this.fb.group({
        translate: []
      }))
    })
  }

  saveToDictionary() {
    let keyWords = this.wordsArray?.map(word => _.zipObject(['key'], [word]));
    const translateWords = this.newWordsForm.value['newWordsArray'];
    let objectForDictionary = _.merge(keyWords, translateWords);
    this.loadDictService.addWordsToDictionary(objectForDictionary);
    this.newWordsArray = new FormArray([]);
    this.wordsArray = [];
  }
}