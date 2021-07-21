import { Component } from "@angular/core";
import { NasaService } from "./nasa.service";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "nasa-astronomy";
  startDate: Date;
  maxDate: Date;
  imageData: any = [];
  constructor(private nasaService: NasaService) {}
  ngOnInit(): void {
    this.startDate = new Date();
    this.maxDate = new Date();
    this.getImage();
  }

  getImage(data?) {
    this.nasaService.getAstronomyImage(data).subscribe((res) => {
      this.imageData = res;
    });
  }

  onDateChanged(value) {
    let date = formatDate(value, "yyyy-MM-dd", "en-US");
    this.getImage(date);
  }
}
