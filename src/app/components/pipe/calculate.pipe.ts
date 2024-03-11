import { Pipe, PipeTransform } from "@angular/core";

export enum ECalculateMode {
  PLUS,
  MINUS,
}

type TCalculatePipeParams = {
  mode: ECalculateMode;
  value: number;
};

@Pipe({
  name: "calculate",
  standalone: true,
})
export class CalculatePipe implements PipeTransform {
  transform(initValue: number, { mode, value }: TCalculatePipeParams): number {
    if (mode === ECalculateMode.PLUS) {
      return initValue + value;
    }

    return initValue - value;
  }
}
