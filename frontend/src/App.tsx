import NavBar from 'components/navbar';
import Footer from 'components/footer';
import DataTable from 'components/dataTable';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
