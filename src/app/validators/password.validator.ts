import { AbstractControl } from "@angular/forms";
import { map } from "rxjs/operators";
import { CategoryService } from '../components/example-one/category.service'


export class MyValidators {

    /// metodo para validar la password
    static password(control: AbstractControl) {
        const value = control.value;

        if (!containNumber(value)) {
            return { invalid_password: true }
        }

        return null;
    }

    static matchPassword(control: AbstractControl) {
        const password = control.get('password').value;
        const confirmPassword = control.get('confirmPassword').value;

        if (password !== confirmPassword) return { not_match_password: true }

        return null;
    }

    static validateCategory(service: CategoryService) {

        // retorna una funcion
        return (control: AbstractControl) => {
            const value = control.value;
            // 
            return service.checkCategory(value)
                .pipe(
                    map((response: any) => {
                        const isAvailable = response.isAvailable;
                        if (!isAvailable) {
                            return { not_available: true }
                        }
                        return null;
                    })
                );
        };
    }
}

let containNumber = (value: string) => value.split('').find(val => isNumber(val)) !== undefined;

let isNumber = (numb) => !isNaN(parseInt(numb, 10))