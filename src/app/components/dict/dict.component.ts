import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { IWord } from 'src/app/model/model';
import { LoadDictService } from 'src/app/services/load-dict.service';
import { ModalNewWordComponent } from '../modal-new-word/modal-new-word.component';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss']
})
export class DictComponent implements OnInit {
  words: IWord[] = [];
  searchForm: FormGroup;
  
  constructor(private service: LoadDictService, public dialog: MatDialog) { 
    this.words = this.service.getSessionDictionary().sort((a:IWord, b:IWord)=>a.key > b.key? 1: -1 );
    this.searchForm = new FormGroup({
      search: new FormControl(),
    })
  }

  ngOnInit(): void {
    //this.words = this.service.loadDictionaryFromDB();
    this.service.changeDictionary.subscribe(()=>{
      this.updateDictionary();
    })
  }
 
  updateDictionary(){ // must be finilized
    this.words = this.service.getSessionDictionary();
  }
 
  addWord(){
    const dialogRef = this.dialog.open(ModalNewWordComponent, {
      width: '600px',
      data: {key: "", translate: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         this.service.addWordToDictionary(result);
      } 
    });
  }

  loadBaseDictionary(){
    this.service.loadBaseDictionary();
  }
}
