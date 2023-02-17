import {Component} from '@angular/core';
import {CustomerService} from "./services/customer.service";
import {Customer, CustomerRepository} from "./model/Customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-test-angular-latest';

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    console.log(this.customerService.getCustomers());
  }
}
