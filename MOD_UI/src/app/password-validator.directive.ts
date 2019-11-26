import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({ 
  selector: '[app]',
  providers : [{ provide :NG_VALIDATORS, useExisting : PasswordValidatorDirective, multi:true}]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }

  @Input() app : string;
  public validate(control:AbstractControl): {[key : string] : any } | null {
    const controlToCompare = control.parent.get(this.app);
    if(controlToCompare && controlToCompare.value !== control.value){
      return{ 'notEqual' : true};
    }
    return null;
  }

}
