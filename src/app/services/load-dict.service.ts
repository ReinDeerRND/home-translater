import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BaseDictionary, SessionDictionary } from '../data/base-dict';
import { IText, IWord } from '../model/model';
import { Subject } from 'rxjs';
import { BaseTexts } from '../data/base-text';

@Injectable({
  providedIn: 'root'
})
export class LoadDictService {
  
  private dbUrl = 'api/dict'; 
  changeDictionary: Subject<any> = new Subject<any>();
  
  constructor(private http: HttpClient) {
    let sub = this.loadDictionaryFromDB().subscribe(dict=>{
      dict.forEach(item=>SessionDictionary.push(item));
      sub.unsubscribe();
    });
  }

  addWordToDictionary(word: IWord){
   SessionDictionary.push(word);
   this.changeDictionary.next();
  }

  addWordsToDictionary(array:IWord[]){
    if (array && array.length > 0){
      array.forEach(item =>{
        SessionDictionary.push(item);
      });
      this.changeDictionary.next();
    }
  }

  getSessionDictionary(){
    return SessionDictionary;
  }

  saveSessionDictionaryToDB(){
    //переписать
    SessionDictionary.forEach((word: IWord)=>{
      BaseDictionary.push(word);
    })
  }

  loadDictionaryFromDB(){ //remote dict in DB
    return this.http.get<IWord[]>(this.dbUrl);
  }

  loadTexts(){
    return BaseTexts;
  }
  addText(text:IText){
    BaseTexts.unshift(text);
  }

}
