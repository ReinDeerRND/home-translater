import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IWord } from 'src/app/model/model';
import { LoadDictService } from 'src/app/services/load-dict.service';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss']
})
export class DictComponent implements OnInit {
  words: IWord[] = [];
  searchForm: FormGroup;
  
  constructor(private service: LoadDictService) { 
    this.words = this.service.getSessionDictionary();
    this.searchForm = new FormGroup({
      search: new FormControl(),
    })
  }

  ngOnInit(): void {
    
    this.service.changeDictionary.subscribe(()=>{
      this.updateDictionary();
    })
  }
 
  updateDictionary(){ // must be finilized
    this.words = this.service.getSessionDictionary();
  }
 
  addWord(){
    this.service.saveSessionDictionaryToDB();
    //this.words = this.service.loadDictionaryFromDB();
  }

}
