import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  constructor(private service: FileUploadService) { }

  ngOnInit() {
  }

  uploadFile() {
    let formData = new FormData();
    console.log(this.fileInput.nativeElement.files[0]);
    formData.append('fileInput', this.fileInput.nativeElement.files[0]);
    this.service.performUpload(formData).subscribe( (data) => {
      alert("File Upload");
    });
  }

}
