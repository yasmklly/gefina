// import {createServer} from 'node:http'; -> não é mais necessária agora que temos o express
import express from 'express';

import invoiceRouter from './invoice.route.ts'

const app = express();

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.use('/api/invoices', invoiceRouter);

app.use((_request, response) => {
  response.status(404).json({
    error: {
      status: 404,
      message: 'Recurso não encontrado.'
    }
  });
}); //permite criar um intermediário que vai executar algo em algum momento (middler). parece com if/else

app.listen(3000); // escutar a porta 3000
