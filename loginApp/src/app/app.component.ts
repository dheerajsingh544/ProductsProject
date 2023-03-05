import { Component } from '@angular/core';
import { SettingService } from './modules/admin/setting.service';
import { LoginUserService } from './shared/login-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginUserService,SettingService]
})
export class AppComponent {

  title = 'loginApp';
}
