import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let usernamePattern=/^[0-9a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value)) &&   !usernamePattern.test(control.value))
    {
      return {usernameInvalidCharacters: true};
    }

    if (control.value !== undefined && (isNaN(control.value)) &&  control.value.length <= 6)
    {
      return {minLength: true};
    }
    return null;
  };
}


export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let passwordPattern=/^[0-9@#$&%!a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value))&&   !passwordPattern.test(control.value))
    {
      return {passwordInvalidCharacters: true};
    }
    if (control.value !== undefined && (isNaN(control.value)) &&  control.value.length <= 6)
    {
      return {minLength: true};
    }
    return null;
  };
}



export function confirmPasswordValidator(): ValidatorFn
{
  return (control: AbstractControl): { [key: string]: boolean } | null =>
  {
    let confirmPasswordPattern=/^[0-9@#$&%!a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value)) &&   !confirmPasswordPattern.test(control.value))
    {
      return {passwordConfirmInvalidCharacters: true};
    }
    if (control.value !== undefined && (isNaN(control.value)) &&  control.value.length <= 6)
    {
      return {minLength: true};
    }
    return null;
  };
}


export function matchPasswordValidator(formGroup: FormGroup): ValidatorFn
{
  return (control: AbstractControl): { [key: string]: boolean } | null =>
  {
    if (control.value !== undefined && (isNaN(control.value)) && (formGroup.controls.username.value === control.value))
    {
      return { passwordsMatched: true };
    }
    return null;
  };
}


/*
export const matchPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ? { passwordsMatched: true } : null;
};
*/


