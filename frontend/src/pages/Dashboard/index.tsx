import ImgDsDark from 'assets/img/ds-dark.svg';
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';
import DataTable from 'components/dataTable';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5>Todas as vendas</h5>
          <DonutChart />
        </div>
      </div>
      <div className="py-3 ">
        <h2 className="text-primary">
          Todas as vendas e mais ainda do manolitcho
        </h2>
      </div>
      <div className="container">
        <DataTable></DataTable>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Dashboard;
