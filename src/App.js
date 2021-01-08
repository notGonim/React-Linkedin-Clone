import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Feed } from './components/feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './components/login/Login';
import { auth } from './components/firebase';
import { useEffect, useState } from 'react';
import { LogInAction, LogOutAction } from './actions/UserAction';

function App() {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logedin
        dispatch(LogInAction({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
        setLogged(true)
      } else {
        //loggedout
        dispatch(LogOutAction())
        setLogged(false)
      }
    })
  }, [])

  return (
    <div className="App">
      <Header />
      {!user ?
        (<Login />) :
        (<div className="app_body">
          <Sidebar />
          <Feed />
        </div>)
      }
    </div>
  )
}

export default App;
