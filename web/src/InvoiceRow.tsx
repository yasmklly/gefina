
import type { Invoice } from './invoiceType.tsx';

interface InvoiceRowProps {
  data: Invoice;
}

export default function InvoiceRow({ data }: InvoiceRowProps) {
  return (
    <tr>
      <td>{data.customer.name}</td>
      <td>{data.amount}</td>
      <td>{data.issueDate}</td>
      <td>{data.dueDate}</td>
      <td>{data.status === 'paid' ? 'Paga' : 'Pendente'}</td>
    </tr>
  );
}
