import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

const URL = 'http://localhost:60505/api/fileupload/';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  title = 'Upload Multiple Files in Angular 4';

  myFiles: string[] = [];
  sMsg: string = '';

  getFileDetails(e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  uploadFiles() {
    const frmData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("fileUpload", this.myFiles[i]);
    }

    this.httpService.post('http://localhost:60505/api/fileupload/', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.sMsg = data as string;
        console.log(this.sMsg);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);    // SHOW ERRORS IF ANY.
      }
    );
  }

  isGenral: boolean = true;
  isAlprbot: boolean = false;
  isOdbot: boolean = false;


  enableBot(name: string) {
    if (name == 'alprbot') {
      this.isAlprbot = true;
      this.isOdbot = false;
      this.isGenral = false;
    }
    if (name == 'odbot') {
      this.isOdbot = true;
      this.isAlprbot = false;
      this.isGenral = false;
    }
  };

}
