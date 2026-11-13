type InvoiceStatus = 'pending' | 'paid';

interface Customer {
  // Cria uma interface para o meu objeto
  id: number;
  name: string;
  email: string;
}

export interface Invoice {
  // Cria uma interface padrão para os meus objetos
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}