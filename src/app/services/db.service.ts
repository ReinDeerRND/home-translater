import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { DBDictionary } from '../data/base-dict';
import { IWord } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    const dict: IWord[] = DBDictionary;
    return {dict};
  }
}
