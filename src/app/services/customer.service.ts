import {Injectable} from '@angular/core';
import {Customer, CustomerRepository} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private REPOSITORY: CustomerRepository = {
    customers: [] = localStorage.getItem('customers') ? JSON.parse(<string>localStorage.getItem('customers')) : [],
    getCustomers(): Customer[] {
      return this.customers;
    },
    getCustomerById(id: number): Customer {
      return <Customer>this.customers.find(customer => customer.id === id);
    },
    saveCustomer(customer: Customer): void {
      if (customer.id) {
        const index = this.customers.findIndex(item => item.id === customer.id);
        this.customers[index] = customer;
      } else {
        customer.id = this.customers.length + 1;
        this.customers.push(customer);
      }
      localStorage.setItem('customers', JSON.stringify(this.customers));
    },
    deleteCustomer(customer: Customer): void {
      const index = this.customers.findIndex(item => item.id === customer.id);
      if (index > -1) {
        this.customers.splice(index, 1);
      }
      localStorage.setItem('customers', JSON.stringify(this.customers));
    }
  }

  getCustomers(): Customer[] {
    return this.REPOSITORY.getCustomers();
  }

  getCustomerById(id: number): Customer {
    return this.REPOSITORY.getCustomerById(id);
  }

  saveCustomer(customer: Customer): void {
    this.REPOSITORY.saveCustomer(customer);
  }

  deleteCustomer(customer: Customer): void {
    this.REPOSITORY.deleteCustomer(customer);
  }
}

