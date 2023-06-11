import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OpenaiService } from 'src/app/services/openai.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private openAiService : OpenaiService){
    }

    userInput : FormControl = new FormControl()
    output : any;
    
    sendRequest(){
      this.openAiService.getResponse(this.userInput.value).then(res => {
        this.output = res.data.choices[0].message?.content
      })
    }

}
