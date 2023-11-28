import {useState , useEffect} from 'react';
import './App.css';
import {getPosts , getRandomUser} from "./API";
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
  const [data , setData ] = useState(null);
  const [userData , setUserData] = useState(null);

  useEffect(()=>{
    getPosts().then((posts)=> setData(posts));
  }, []);
  useEffect(()=>{
    getRandomUser().then((user)=> setUserData (user.results[0]));
  }, []);
  const refresh =() => {
    getRandomUser().then((user)=> setUserData (user.results[0]));
  }

  return (
    <div className="App">
      { userData && <UserCard data ={userData} />}
      <button onClick={refresh}>Refresh user</button>
      {
        data ? data.map((e)=> <PostCard key={e.id} title={e.title} body= {e.body} />) : <p> NO DATA</p>
      }
    </div>
  );
}

export default App;
