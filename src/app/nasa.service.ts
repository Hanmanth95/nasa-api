import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  constructor(private http: HttpClient) {}
  getAstronomyImage(date?: Date) {
    let url = "";
    if (date) {
      url = "http://localhost:8400/nasa/fetch/astronomy?date=" + date;
    } else {
      url = "http://localhost:8400/nasa/fetch/astronomy";
    }
    return this.http.get(url);
  }
}
