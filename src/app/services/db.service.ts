import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { BaseDictionary } from '../data/base-dict';
import { IWord } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    const dict: IWord[] = BaseDictionary;
    return {dict};
  }
}
