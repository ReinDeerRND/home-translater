import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  
  constructor(private service: LoadDictService) { 
    this.words = this.service.getSessionDictionary();
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
