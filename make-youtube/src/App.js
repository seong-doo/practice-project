import './App.css';
import Header from './conponent/Header';
import SideBar from './conponent/sideBar';
import Body from './conponent/body'

function App() {
  return(
<>
    <header className = "App-header">
      <Header />
    </header>
    <body className = "App-body">
      <section className="youSideBar">
        <SideBar />
      </section>
      <section className="youBody">
        <Body />
      </section>
    </body>
</>
  );
}

export default App;
