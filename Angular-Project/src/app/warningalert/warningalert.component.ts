import { Component } from "@angular/core";
import { reduce } from "rxjs";

@Component({
    selector: 'app-warningalert',
    template: `<p>The Warning Alert Component</p>`,
    styles: [`
        p {
            font-weight: 600;
            padding: 20px;
            background: mistyrose;
            border: 1px solid red;
        }`]
})
export class WarningAlertComponent {

}