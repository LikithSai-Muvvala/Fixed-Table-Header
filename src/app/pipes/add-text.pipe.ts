import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addText"
})
export class AddTextPipe implements PipeTransform {
  transform(value: any, textValue?: string,addAt?: string, ) {
    if (textValue == null && addAt == null) return value;
    if ((addAt != null) && (addAt === "right")) {
      return `${value} ${textValue}`;
    } else {
      return `${textValue} ${value}`;
    }
  }
}
