import { Router } from 'express';

import {
    findAllInvoices,
    findInvoiceById
 }  from './invoice.service.ts';

 const router = Router();

router.get('/', (_request, response) => {
    const invoices = findAllInvoices();

  // mostra todas as faturas
    response.status(200).json(invoices);
});

router.get('/:id', (request, response) => {
  // mostra fatura pelo id
  const id = Number(request.params.id);

  const invoice = findInvoiceById(id)

  if (!invoice) response.status(404).json({
      error: {
        // responde caso não encontre a fatura
        status: 404,
        message: 'Fatura não encontrada.'
      }
    });
  response.status(200).json(invoice); // responde com a fatura encontrada
});

export default router;