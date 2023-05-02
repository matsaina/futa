import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/Table";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

function App() {
  return <div>



<NavBar />



    <div className="container-fluid">
      <div className="row">
      
      
 
<SideBar />






        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">All Games</h1>
 
          </div>

<Table />


         



        </main>
      </div>
    </div>





  </div>;
}

export default App;
