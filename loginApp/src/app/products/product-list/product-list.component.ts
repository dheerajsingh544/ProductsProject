import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { SettingService } from 'src/app/modules/admin/setting.service';
import { LoginUserService } from 'src/app/shared/login-user.service';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  index: number = 0;
  products: any;
  data: any;
  filteredName: string = '';
  filteredNameRxjs: string = '';
  settingSearch: boolean = true;
  settingEdit: boolean = true;
  settingRemove: boolean = true;
  userRole: string = '';
  isCheckbox: boolean = false;
  count: any = 0;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private settingService: SettingService, private auth: LoginUserService) {
    this.fetchData();

  }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter((event: RouterEvent) => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.products.forEach(element => {
    //     if(element.toBeDeleted==true){
    //       console.log("got one");
    //       this.isCheckbox=true;
    //     }
    //   });
    // });
    // console.log("is checked"+this.isCheckbox);
    //   this.auth.userRole.subscribe((res) => {
    //     console.log("res" + res);
    //     this.userRole = res;

    console.log("filter data" + this.filteredName)
    this.settingService.getSetting().subscribe(res => {
      this.data = JSON.parse(JSON.stringify(res));
      // if (this.userRole=="user") {
      this.settingSearch = this.data["allowProductSearch"];
      this.settingEdit = this.data["allowEdit"];
      this.settingRemove = this.data["allowDelete"];
      console.log(this.settingSearch + " got:" + this.settingEdit);
      //  }
      // else {
      //   console.log("in admin :" + this.userRole);
      //   this.settingSearch = true;
      //   this.settingEdit = true;
      //   this.settingRemove = true;
      // }

    });

  }

  edit(index: number) {
    this.router.navigate([index + '/edit'], { relativeTo: this.route });
  }
  remove(index: number) {
    if (confirm("Do you really want to remove this tasty Product!!") == true) {
      this.productService.remove(index).subscribe((data) => {
        console.log("Deleted the item");
      });
      this.router.navigate(['product']);
    }
    this.fetchData();
  }
  fetchData() {
    this.productService.apicall().subscribe((data) => {
      if (this.filteredNameRxjs != '') {

        const source = from(JSON.parse(JSON.stringify(data)));
        source.pipe(filter(member => member["name"] == this.filteredNameRxjs),
          toArray()).subscribe(res => {
            this.products = res;
          })
      }
      else {
        console.log(data[1]);
        this.products = data;
      }
    })
  }

  deleteMulti() {
    this.products.forEach((product) => {
      if (product.toBeDeleted) {
        this.productService.remove(product.pid).subscribe((data) => {
          console.log("Deleted the item");
        });
      }
      this.fetchData();
    });

  }
  onChange(e) {
    if (e.target.checked) {
      this.isCheckbox = true;
      this.count += 1
    }
    else {
      this.count -= 1;
      if (this.count > 0) {
        this.isCheckbox = true;
      }
      else {
        this.isCheckbox = false
      }
    }
  }
}