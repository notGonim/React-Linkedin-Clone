import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Feed } from './components/feed/Feed';
import { useSelector } from 'react-redux';
import { Login } from './components/login/Login';

function App() {
  const user = useSelector(state => state.user)
  return (

    <div className="App">
      <Header />

      {!user ?
        (
          <Login />
        ) :
        (
          <div className="app_body">
            <Sidebar />
            <Feed />
          </div>

        )
      }

    </div>


  )
}

export default App;
