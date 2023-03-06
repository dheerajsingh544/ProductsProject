import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Setting } from 'src/app/modules/setting.model';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'app-services',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class ServicesComponent implements OnInit {
  data: any;
  settingForm = new FormGroup({
    allowCreateProduct: new FormControl(),
    allowEdit: new FormControl(),
    allowDelete: new FormControl(),
    allowProductSearch: new FormControl()
  });
  setting: Setting = new Setting(123, false, false, false, false);

  constructor(private settingService: SettingService, private route: Router) {
  }

  ngOnInit(): void {
    this.settingService.getSetting().subscribe((res) => {
      this.data = JSON.parse(JSON.stringify(res));
      console.log("get setting data" + JSON.stringify(res));
      this.settingForm = new FormGroup({
        allowCreateProduct: new FormControl(this.data["allowCreate"]),
        allowEdit: new FormControl(this.data["allowEdit"]),
        allowDelete: new FormControl(this.data["allowDelete"]),
        allowProductSearch: new FormControl(this.data["allowProductSearch"])
      });

    });
  }
  onSubmit() {
    this.setting.id = 123;
    this.setting.allowCreate = this.settingForm.get('allowCreateProduct').value;
    this.setting.allowEdit = this.settingForm.get('allowEdit').value;
    this.setting.allowDelete = this.settingForm.get('allowDelete').value;
    this.setting.allowProductSearch = this.settingForm.get('allowProductSearch').value;
    this.settingService.updateSetting(this.setting).subscribe((data) => {
      console.log("setting updated" + data);
    })
    alert("setting updated!!!");
   this.route.navigate(['/product']);

  }
  reset() {
    this.settingForm = new FormGroup({
      allowCreateProduct: new FormControl(true),
      allowEdit: new FormControl(true),
      allowDelete: new FormControl(false),
      allowProductSearch: new FormControl(true)
    });
    alert("setting is set to default");
  }
}
