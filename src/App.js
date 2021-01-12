import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import { Helmet } from 'react-helmet'
import Todo from "./components/Todo"


const TITLE = "Enzo's Portfolio Website"

function App() {
  return (
    
    <BrowserRouter>
    <Helmet>
          <title>{ TITLE }</title>
    </Helmet>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/about' />
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Post} path='/post' />
      <Route component={Project} path='/project' />
      <Route component={Todo} path='/todolist' />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
