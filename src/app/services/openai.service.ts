import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  openai: OpenAIApi;

  constructor() {
    this.openai = new OpenAIApi(new Configuration({
      apiKey: environment.API_KEY
    }))
  }

  getResponse(userInput: string) {

    let response = this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: 'You are ChadGPT, your assistant.' },
        { role: "user", content: userInput },
      ],
    })
    

    return response;
  }

}
