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
  customers: Customer[];

  getCustomers(): Customer[];

  getCustomerById(id: number): Customer;

  saveCustomer(customer: Customer): void;

  deleteCustomer(customer: Customer): void;
}
