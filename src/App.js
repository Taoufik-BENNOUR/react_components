import './style.css';
import Header from './Components/Profile/Header';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';

function App() {
  return (
    <>
      <Header/>
      <div  className="profile">
        <FullName/>
        <ProfilePhoto/>
      </div>
      <Address/>
    </>

  );
}

export default App;
