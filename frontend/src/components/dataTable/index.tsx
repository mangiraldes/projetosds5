import axios from 'axios';
import { useState, useEffect } from 'react';
import { SalePage } from 'types/sale';
import { formatLocalDate } from 'utils__/convert';
import { BASE_URL } from 'utils__/requests';

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    last: true,
    totalElements: 0,
    totalPages: 0,
    number: 0,
    first: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=1&size=5&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((value) => (
            <tr key={value.id}>
              <td>{formatLocalDate(value.date, 'dd/MM/yyyy')}</td>
              <td>{value.seller.name}</td>
              <td>{value.visited}</td>
              <td>{value.deals}</td>
              <td>{value.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
