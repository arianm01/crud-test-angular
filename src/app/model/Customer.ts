// Define the Customer entity
export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public phoneNumber: string,
    public email: string,
    public bankAccountNumber: string,
  ) {
  }
}

// Define the CustomerRepository interface
export interface CustomerRepository {
  getCustomers(): Customer[];

  getCustomerById(id: number): Customer;

  saveCustomer(customer: Customer): void;

  deleteCustomer(customer: Customer): void;
}

// Define the CustomerService class
export class CustomerService {
  constructor(private repository: CustomerRepository) {
  }

  getCustomers(): Customer[] {
    return this.repository.getCustomers();
  }

  getCustomerById(id: number): Customer {
    return this.repository.getCustomerById(id);
  }

  saveCustomer(customer: Customer): void {
    this.repository.saveCustomer(customer);
  }

  deleteCustomer(customer: Customer): void {
    this.repository.deleteCustomer(customer);
  }
}
