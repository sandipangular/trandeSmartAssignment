import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GiphyAPIService } from '../../../APIServices/giphy-api.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor(private webService:GiphyAPIService) { }

  ngOnInit(): void {
      this.loadData();
  }
  gifsArray:any; 

  loadData(){
    
    this.webService.getDataBysearch().subscribe(res=>{
     // debugger;
      console.log("data from API",res);
      this.gifsArray=res;
    })
  }
  onKeypressEvent(event: any){
   // console.log(event.target.value);
    this.webService.searchData(event.target.value); 
 }

}
