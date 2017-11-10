import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h1>Header</h1>
const Dashboard = () => <h1>Dashboard</h1>
const Content1 = () => <h1>Content1</h1>
const Landing = () => <h1>Landing</h1>


const App =  () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};



export default App;
