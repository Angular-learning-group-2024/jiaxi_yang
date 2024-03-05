import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const MAX_TITLE_LENGTH = 10;

export function postTitleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const length = control.value?.length;
    const isValidLength =
      typeof length === "number" && length <= MAX_TITLE_LENGTH;
    return isValidLength
      ? null
      : { max: { actual: length, max: MAX_TITLE_LENGTH } };
  };
}
