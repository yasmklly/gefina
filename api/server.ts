// import {createServer} from 'node:http'; -> não é mais necessária agora que temos o express
import express from 'express';

const app = express();

type InvoiceStatus = 'pending' | 'paid';

interface Customer { // Cria uma interface para o meu objeto
    id: number;
    name: string;
    email: string;
}

interface Invoice { // Cria uma interface padrão para os meus objetos
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: Customer
}

const invoices: Invoice[] = [{
    id: 1, // identificador
    amount: 125837, // é uma fatura de 1258.37, mas ficou com mais dois 0 para serem as casas decimais
    status: 'pending', // fatura pendente
    issueDate: '2026-10-25', // data de emissão
    dueDate: '2026-10-20', // data de vencimento
    customer: { // informações acerca do cliente
        id: 5,
        name: 'Construtora Meridiano',
        email: 'comerciala@meridiano.com.br'
    }

}, {
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
}];

app.get('/api/health', (request, response) => {
    response.status(200).json({ status: 'ok' });
});

app.get('/api/invoices', (request, response) => { // mostra todas as faturas
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => { // mostra fatura pelo id
    const id = +request.params.id; // esse + transforma o request em número

    const invoice = invoices.find(invoice => invoice.id === id); // procura algo na lista semelhante ao id

    if (!invoice) response.status(404).json({
        error: { // responde caso não encontre a fatura
            status: 404,
            message: 'Fatura não encontrada.'
        }
    });
    response.status(200).json(invoice); // responde com a fatura encontrada
});


app.use((request, response) => {
    response.status(404).json({
        error: {
            status: 404,
            message: 'Recurso não encontrado.'

        }
    })
}); //permite criar um intermediário que vai executar algo em algum momento (middler). parece com if/else

app.listen(3000); // escutar a porta 3000