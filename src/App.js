import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Feed } from './components/feed/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
