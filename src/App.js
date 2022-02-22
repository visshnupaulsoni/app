//import logo from './logo.svg';
import './App.css';
import store from './store/mystore';
import { Provider } from 'react-redux';
import User from './components/User';
import ScoreCard from './components/Scorecard/ScoreCard'
import Greeting from './components/functional comps/Greeting';
import GreetingES6 from './components/functional comps/GreetingES';
import Personcomp from './components/functional comps/personcomp';
import MyEventHandling from './components/event-handling-demo/MyEventHandling';
import UnControlledComponentFormDemo from './components/form-handeling/UncontrolledFormDemo';
import ControlledComponentFormDemo from './components/form-handeling/ControlledComponetFormDemo';
import ControlledcompFormwithmoreElements from './components/form-handeling/ControlledcompFormwithmoreElements';
import PlayerRegistration from './components/form-handeling/PlayerRegistration';
//import { Route, Routes } from 'react-router';
import { BrowserRouter, Routes, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import NoPageFound from './components/NoPageFound';
import HelloWorldFunc from './components/HelloWorldFunc';
import PlayerDetails from './components/PlayerDetails';
import NavBar from './components/NavBar';
import PlayerList from './components/PlayerList';
import ReducerconceptDemo from './components/redux-demo/reducer-starter';
import ReduxDemoV2 from './components/redux-demo/ReduxDemoV2';
import ReduxDemoContainer from './components/redux-demo/ReduxDemoContainer';
import NewsRenderDemo from './components/NewsRenderDemo';
import NodeServerDataDemo from './components/NodeServerDataDemo';
import NewPlayerContainer from './components/Addplayercomp/NewPlayerContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Routes>
          <Route path="/newPlayers" element={<NewPlayerContainer />} />
          <Route path="/nodeApp/players" element={<NodeServerDataDemo />} />

          <Route path="/news" element={<NewsRenderDemo />} />

          <Route path="/redux/redux-demo" element={<ReduxDemoContainer />} />

          <Route path="/redux/reducer-demo" element={<ReducerconceptDemo />} />
          {/*<Switch>*/}
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<GreetingES6 />} />
          <Route path="/test/eventsdemo" element={<MyEventHandling />} />
          <Route path="/test/form-demo1" element={ControlledcompFormwithmoreElements} />

          <Route path="/test" element={<GreetingES6 />} >
            <Route path="/test/eventsdemo" element={<MyEventHandling />} />
            <Route path="/test/form-demo1" element={ControlledcompFormwithmoreElements} />
          </Route>
          {/*Demo params */}
          <Route path="/hello/:city" element={<HelloWorldFunc name={"myname"} />} />
          <Route path="/hello/:city/:stateOfcity" element={<HelloWorldFunc name={"soni"} />} />
          <Route path="/player1/:name/:city/:stateOfcity" element={<HelloWorldFunc name={"soni"} />} />
          <Route path="/player/:name" element={<PlayerDetails name="" />} />
          <Route path="/player/:name/:age/:role/:country/:totRuns" element={<PlayerDetails name="" />} />
          {/*Demo playerlist */}
          <Route path="/players" element={<PlayerList />} />


          <Route path="/apps" element={<App1 />} />
          <Route path="/eventsdemo" element={<MyEventHandling />} />
          <Route path="/form-demo1" element={<ControlledcompFormwithmoreElements />} />
          <Route path="/form-demo2" element={<ControlledComponentFormDemo />} />
          <Route path="/form-demo3" element={<UnControlledComponentFormDemo />} />
          <Route path="*" element={<NoPageFound />} />
          {/*<Redirect to ="/"/>*/}
          {/*</Switch>*/}

        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

function Home() {
  return (
    <NavBar />
    //<div>
    //  <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/"}>Home</NavLink>
    //<NavLink activeClassName="active" style={{ margin: "20px" }} to={"/apps"}>App1</NavLink>
    // <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/eventsdemo"}>MyEventHandling</NavLink>
    // <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo1"}>ControlledcompFormwithmoreElements</NavLink>
    // <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo2"}>ControlledComponentFormDemo</NavLink>
    // <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo3"}>UnControlledComponentFormDemo</NavLink>
    //</div>

    // <div>
    // <NavLink style={{ margin: "20px" }} to={"/"}>Home</Link>
    //<Link style={{ margin: "20px" }} to={"/apps"}>App1</Link>
    //<Link style={{ margin: "20px" }} to={"/eventsdemo"}>MyEventHandling</Link>
    //<Link style={{ margin: "20px" }} to={"/form-demos1"}>ControlledComponentFormDemo </Link>
    //<Link style={{ margin: "20px" }} to={"/form-demos2"}>UnControlledComponentFormDemo</Link>
    //<Link style={{ margin: "20px" }} to={"/form-demos3"}>ControlledcompFormwithmoreElements </Link>
    // </div>
    // <div>
    //<a style={{ margin: "10Px" }} to={"/"}>Home</a>
    //<a href="/">Home</a>
    //<a href="/apps">all component in app1</a>
    // <a href="/eventsdemo">Uncontrolled fome Demo </a>
    // <a href="/form-demo">Controlled form Demo </a>
    // <a href="/form-demo">Advanced controlled form demo</a>

    // </div>

  )
};
function App1() {
  return (

    <div className="App1">
      <NavBar />

      <MyEventHandling setAge="25" />
      <UnControlledComponentFormDemo />
      <ControlledComponentFormDemo />
      <ControlledcompFormwithmoreElements />
      <PlayerRegistration />

      <Greeting name="vishnupaul soni" />
      <GreetingES6 name="vishnu"></GreetingES6>
      <Personcomp name="soni"></Personcomp>


      <ScoreCard>
      </ScoreCard>
      <header className="App1-header">
        {/*<img src={logo} className="App-logo" alt="logo" />}
        <p>
         Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
  >*/}
        <h4>Learn React today</h4>
        <h4 id="myId">Hello</h4>

        <User name="soni"
          popularity={1}
          image="images/logo192.png" />

      </header>
    </div>
  );
}

export default App;
