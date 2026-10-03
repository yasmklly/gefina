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
    amount: 125000, // é uma fatura de 1250, mas ficou com mais dois 0 para serem as casas decimais
    status: 'pending', // fatura pendente
    issueDate: '01-10-2026', // data de emissão
    dueDate: '03-11-2026', // data de vencimento
    customer: { // informações acerca do cliente
        id: 7,
        name: 'Construtora Meridiano',
        email: 'construtora@meridiano.com'
    }

}, {
    id: 2,
    amount: 35000, 
    status: 'paid',
    issueDate: '02-10-2026',
    dueDate: '05-11-2026',
    customer: { 
        id: 7,
        name: 'Construtora Meridiano',
        email: 'construtora@meridiano.com'
    }
}];

app.get('api/health', (request, response) => {
    response.status(200).json({ status: 'ok' });
});

app.get('api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.use((request, response) => {
    response.status(404).json({ error: { 
        status: 404,
        message: 'Recurso não encontrado.' 

    }})
}); //permite criar um intermediário que vai executar algo em algum momento (middler). parece com if/else

app.listen(3000); // escutar a porta 3000