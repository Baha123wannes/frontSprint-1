import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataModel } from './dataModel';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http :HttpClient){}
  public GetAllData():Observable<DataModel[]>{
    return this.http.get<DataModel[]>(`${this.apiServerUrl}/find`)
  }
  public searchDatByName(x:number ):Observable<DataModel>{
    return this.http.get<DataModel>(`${this.apiServerUrl}/search/${x}`)
  }
  public searchDatByVersion(v:number):Observable<DataModel[]>{
    return this.http.get<DataModel[]>(`${this.apiServerUrl}/search/version/${v}`)
  }
  public deletDatById(n:String):Observable<DataModel[]>{
    return this.http.delete<DataModel[]>(`${this.apiServerUrl}/delete/${n}`)
  }
  public deletAllData():void{
     this.http.delete<void>(`${this.apiServerUrl}/delete`)
  }

}
