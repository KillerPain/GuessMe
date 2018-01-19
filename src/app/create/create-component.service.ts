import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CreateComponentService {
  apiUrl = 'http://localhost:8080/GuessMe';
  createGameUrl = '/api/game/create';
  createQuestionUrl = '/api/question/create';
  constructor(private http: HttpClient) { }

  createGame(name, questions) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.createGameUrl, {
        name: name,
        host: userData.token
    }, {headers: headers}).toPromise().then((data: any) => {
      questions.forEach(question => {
        this.addQuestion(data.id, userData, question);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  addQuestion(gameID, userData, question) {
    question.gameID = gameID;
    question.authUser = userData.token;
    // 'A' is always correct
    if (question.correct == "B") {
      [question.optionA, question.optionB] = [question.optionB, question.optionA] 
    }
    if (question.correct == "C") {
      [question.optionA, question.optionC] = [question.optionC, question.optionA] 
    }
    if (question.correct == "D") {
      [question.optionA, question.optionD] = [question.optionD, question.optionA] 
    }
    delete question.correct;
    //
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.createQuestionUrl, question, {headers: headers}).toPromise().then((data: any) => {
      console.log("DONE!")
    }).catch(error => {
      console.log(error);
    });
  }
}
