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
    // self value (e.g. retype password)
    const v = c.value;
    // control value (e.g. password)
    const e = c.root.get(this.appConfirmPassword);
    // value not equal
    if (e && v !== e.value) {
      return {
        appConfirmPassword: false
      };
    }
    return null;
  }
}
