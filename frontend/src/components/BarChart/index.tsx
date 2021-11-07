import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import { SaleSucces } from 'types/SellerSucess';
import { BASE_URL } from 'utils__/requests';
import axios from 'axios';
import { round } from 'utils__/convert';

const BarChart = () => {
  type SeriesData = {
    name: string;
    data: number[];
  };

  type ChartData = {
    labels: { categories: string[] };
    series: SeriesData[];
  };

  const [chartData, setChartData] = useState<ChartData>({
    labels: { categories: [] },
    series: [],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      //alert();
      const datas = response.data as SaleSucces[];
      const myCategories = datas.map((x) => x.sellerName);
      const mydata = datas.map((x) => round(100.0 * (x.visited / x.deals), 1));
      const serieData: SeriesData[] = [];
      const objserie: SeriesData = { name: '', data: [] };
      objserie.name = '% Sucesso bacana';
      objserie.data = mydata;
      serieData.push(objserie);

      setChartData({
        labels: { categories: myCategories },
        series: serieData,
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  // const mockData = {
  //   labels: {
  //     categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  //   },
  //   series: [
  //     {
  //       name: '% Sucesso',
  //       data: [43.6, 67.1, 67.7, 45.6, 71.1],
  //     },
  //   ],
  // };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
