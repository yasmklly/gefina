import { Invoice } from './invoiceType.ts'

import InvoiceTable from './InvoiceTable.tsx'

export default function InvoicePage() {
    const invoices: Invoice[] = [
        {
            id: 1, // identificador
            amount: 125837, // é uma fatura de 1258.37, mas ficou com mais dois 0 para serem as casas decimais
            status: 'pending', // fatura pendente
            issueDate: '2026-10-25', // data de emissão
            dueDate: '2026-10-20', // data de vencimento
            customer: {
                // informações acerca do cliente
                id: 5,
                name: 'Construtora Meridiano',
                email: 'comerciala@meridiano.com.br'
            }
        },
        {
            id: 2,
            amount: 35000,
            status: 'paid',
            issueDate: '2026-10-01',
            dueDate: '2026-10-31',
            customer: {
                id: 10,
                name: 'Gráfica Nova',
                email: 'grafica@nova.com.br'
            }
        },
        {
            id: 3,
            amount: 1801830,
            status: 'pending',
            issueDate: '2026-10-20',
            dueDate: '2026-10-25',
            customer: {
                id: 15,
                name: 'Tem de Tudo',
                email: 'comercial@temdetudo.com.br'
            }
        }
    ];
    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices} />
        </main>
    </>
}