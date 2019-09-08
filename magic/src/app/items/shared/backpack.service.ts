import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackpackItem } from './backpack';
import { map } from 'rxjs/operators';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class BackpackService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  getBackpackItemsByOwnerID(id: number): Observable<BackpackItem[]> {
    const url: string = this.appUrl + 'backpack/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as BackpackItem[]));
  }

  deleteBackpackItem(bp: BackpackItem): Observable<void>{
    const url: string = this.appUrl + '/backpack/' + bp.backpackID;
    return this.http.delete(url, {withCredentials: true}).pipe(
      map(resp => null)
    );
  }

  updateBackPack(backpack: BackpackItem): Observable<BackpackItem>{
    const body = JSON.stringify(backpack);
    return this.http.put(this.appUrl+"backpack/"+ backpack.backpackID, body, {headers: this.headers, withCredentials: true}).pipe(
      map(resp => resp as BackpackItem));  
  }

  sellItems(bp:BackpackItem){
    this.getBackpackItemsByOwnerID(1).subscribe( resp => {
      for(let backpackItem of resp){
        if(backpackItem.itemID.name == bp.itemID.name){
          backpackItem.stock = backpackItem.stock + bp.stock;
          this.updateBackPack(backpackItem).subscribe( resp => {
            console.log("Increased item stock by", bp.stock, ": ", resp);
          });
        }
        else{
          console.log("need to add this item to the store");
        }
      }
    });
  }

  sellItem(bp: BackpackItem){
    this.getBackpackItemsByOwnerID(1).subscribe( resp => {
      for(let backpackItem of resp){
        if(backpackItem.itemID.name == bp.itemID.name){
          backpackItem.stock = backpackItem.stock + 1;
          this.updateBackPack(backpackItem).subscribe( resp => {
            console.log("Increased item stock by 1: ", resp);
          });
        }
        else{
          console.log("need to add this item to the store");
        }
      }
    });
  }

}
