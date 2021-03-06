import {OnInit, Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService) {}
    ngOnInit() {
    }
}
