import {createServer} from 'node:http';

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

createServer(function (request, response) {
    if (request.url === 'api/health'){
        response.writeHead(
        200,
        { 'content-type': 'application/json'}
      );
      response.end(JSON.stringify( { status: 'ok' }));
      return;
    }

    if (request.url === '/api/invoices') {
        response.writeHead(
        200,
        { 'content-type': 'application/json'}
      );
      response.end(JSON.stringify(invoices));
      return;       
    }

    response.writeHead(
        404,
        { 'content-type': 'application/json'}
    );
    response.end(JSON.stringify({message: 'Recurso não encontrado.'}))
}).listen(3000);