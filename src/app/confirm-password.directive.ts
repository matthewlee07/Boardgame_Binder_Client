import { Directive, forwardRef, Attribute, } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword][formControlName],[formControl],[ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConfirmPasswordDirective),
      multi: true
    }
  ]
})

export class ConfirmPasswordDirective implements Validator {
  constructor(@Attribute('appConfirmPassword') public appConfirmPassword: string) { }
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    const e = c.root.get(this.appConfirmPassword);
    if (e && v !== e.value) {
      return {
        appConfirmPassword: false
      };
    }
    return null;
  }
}
