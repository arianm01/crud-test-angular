// Define the Customer entity
class Customer {
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
interface CustomerRepository {
  getCustomers(): Customer[];

  getCustomerById(id: number): Customer;

  saveCustomer(customer: Customer): void;

  deleteCustomer(customer: Customer): void;
}

// Define the CustomerService class
class CustomerService {
  constructor(private repository: CustomerRepository) {
  }

  getCustomers(): Customer[] {
    return this.repository.getCustomers();
  }

  getCustomerById(id: number): Customer {
    return this.repository.getCustomerById(id);
  }

  saveCustomer(customer: Customer): void {
    if (customer.id === undefined) {
      // If the customer ID is undefined, create a new customer
      const newId = this.getCustomers().length + 1;
      const newCustomer = new Customer(newId, customer.firstName, customer.lastName, customer.dateOfBirth, customer.phoneNumber, customer.email, customer.bankAccountNumber);
      this.repository.saveCustomer(newCustomer);
    } else {
      // If the customer ID is defined, update an existing customer
      const existingCustomer = this.repository.getCustomerById(customer.id);
      existingCustomer.firstName = customer.firstName;
      existingCustomer.lastName = customer.lastName;
      existingCustomer.dateOfBirth = customer.dateOfBirth;
      existingCustomer.phoneNumber = customer.phoneNumber;
      existingCustomer.email = customer.email;
      existingCustomer.bankAccountNumber = customer.bankAccountNumber;
      this.repository.saveCustomer(existingCustomer);
    }
  }

  deleteCustomer(customer: Customer): void {
    this.repository.deleteCustomer(customer);
  }
}
