import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-file-reader',
  templateUrl: './local-file-reader.component.html',
  styleUrls: ['./local-file-reader.component.scss'],
})
export class LocalFileReaderComponent implements OnInit {
  imageUrl: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('staticFiles/txt/text.txt', { responseType: 'text' })
      .subscribe((data) => console.log(data));
    this.http
      .get('staticFiles/json/json.json')
      .subscribe((data) => console.log(data));
  }

  uploadImage(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.files) {
      let file = target.files[0];

      let reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
