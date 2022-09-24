import { 
    Directive,
    HostListener
 } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostListener('click') dropdownClick() {
        console.log("Hi! Directive is working")
    }
    @EventBinding('class.show')   
}