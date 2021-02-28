import {AbstractControl, ValidatorFn} from '@angular/forms';

export class RepeatControlValidator {
  public static repeat(controlToRepeat: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
      if (control.value !== controlToRepeat.value) {
        return { repeat: true };
      }
      return null;
    };
  }
}
