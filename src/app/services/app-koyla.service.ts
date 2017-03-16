import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppKoylaService {

  private wordsUrl = 'http://0.0.0.0:8000/koyla/';  // URL to web API

  constructor (private http: Http) {}

  getWord (lang, word): Observable<any> {
    return this.http.get(this.wordsUrl + lang + '/' + word)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body[0].la || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }

}


  // function submitWord(lang,word){

  //    $.getJSON("http://0.0.0.0:8000/koyla/" + lang + "/" + word)
  //    .done(function(data) {
  //         translation = data;
  //         submitWordEvent.notify([translation,lang]);
  //    })
  //    .fail(function() {
  //        console.log('Oh no, something went wrong!');
  //    });
  // };