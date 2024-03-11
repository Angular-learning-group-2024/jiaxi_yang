import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "array",
  standalone: true,
})
export class ArrayPipe implements PipeTransform {
  transform<T>(initValue: T[]): T[] {
    return initValue.slice(-1);
  }
}

@Pipe({
  name: "imPureArray",
  standalone: true,
  pure: false,
})
export class ImPureArrayPipe extends ArrayPipe {}
