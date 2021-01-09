import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'
import Home from './Home/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Search from './Search/Search';
import Results from './Results/Results';
import Programs from './Programs/Programs';
import College from './College/College';
import University from './University/University';



function App() {
  return (
    <div className="App">


<BrowserRouter basename="/">
      <Navbar/>

      <Switch>

        <Route exact path={`/`} exact component={Home}/>
        <Route exact path={`/search`} exact component={Search}/>
        <Route exact path={`/results`} exact component={Results}/>
        <Route exact path={`/program/:id`} exact component={Programs}/>
        <Route exact path={`/college/:id`} exact component={College}/>
        <Route exact path={`/university/:id`} exact component={University}/>

        {/* <Route exact path={`/tests/:id`} exact component={TestPage}/>
        <Route exact path={`/createdtests`} exact component={CreatedTests}/>
        <Route exact path={`/createdtests/:id`} exact component={TestPage}/>
        <Route exact path={`/newtest`} exact component={CreateOrEditTest}/>
        <Route exact path={`/mygrades`} exact component={MyGrades}/>
        <Route exact path={`/catalog`} exact component={StudentsGrades}/>
        <Route exact path={`/activateusers`} exact component={NeactivatListPage}/>
        <Route exact path={`/users`} exact component={UsersPage}/>
        <Route exact path={`/profile`} exact component={MyProfile}/> */}


      </Switch>

      .
      <div>
        <Footer/>        
      </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
