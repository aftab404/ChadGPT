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

  constructor(private openAiService: OpenaiService) {
  }

  userInput: FormControl = new FormControl()
  fileInput!: Blob;

  output: any;

  sendRequest() {
    this.openAiService.getResponse(this.userInput.value).then(res => {
      this.output = res.data.choices[0].message?.content
    })
  }

  loadFile(e: any) {
    const file: File = e.target.files[0];
    this.fileInput = file;
  }

  readFile() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.fileInput);
  }

}
