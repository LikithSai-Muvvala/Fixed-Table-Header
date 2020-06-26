import { Directive, Input, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: "[tableDataColor]"
})
export class TableDataColorDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "green");
  }
}
