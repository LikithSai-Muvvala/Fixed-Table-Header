import { Component, OnInit, VERSION, ViewChild } from "@angular/core";
// import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // @ViewChild(CdkVirtualScrollViewport)
  // public viewPort: CdkVirtualScrollViewport;

  headers = ["sl.no", "name1", "name2"];
  name = "Angular " + VERSION.major;
  tableData: { name: string; name2: string; id: number }[] = [];

  ngOnInit() {
    for (let idx = 1; idx < 40; idx++) {
      this.tableData.push({
        name: `Name ${idx}`,
        name2: `Name: ${idx} ${idx}`,
        id: idx
      });
    }
  }

  // get inverseTranslation(): string {
  //   if (!this.viewPort || !this.viewPort["_renderedContentOffset"]) {
  //     return "-0px";
  //   }
  //   let offset = this.viewPort["_renderedContentOffset"];
  //   return `-${offset}px`;
  // }
}
