import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
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
