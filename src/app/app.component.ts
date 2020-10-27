import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonplaceholderapp';
searchText;
  public data:any = []
   constructor(private http: HttpClient) {

   }
    getData(){
      const url ='https://jsonplaceholder.typicode.com/photos'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        console.log(this.data)
      })
    }
}
