import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataModelService } from './data-model.service';
import { DataModel } from './dataModel';

@Component({
  selector: 'app-data-model',
  templateUrl: './data-model.component.html',
  styleUrls: ['./data-model.component.css']
})
export class DataModelComponent implements OnInit {

  public data!: DataModel[];


  constructor(private dataService : DataModelService) { }

  ngOnInit(): void {
    this.GetAllDate();

  }
  public GetAllDate():void
  {
    this.dataService.GetAllData().subscribe(
      (response: DataModel[])=>
      {
        this.data =response;
      },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
  }
 /* public search(x :number):void
  {
    this.dataService.searchDatByVersion(x).subscribe(
      (response: DataModel[])=>
      {
        this.data1 =response;
      },
      (error:HttpErrorResponse)=>
      {
        alert(error.message);
      }
    );
  }*/

}
