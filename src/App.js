import { Provider } from 'react-redux'
import CakeContainer from './Component/CakeContainer/CakeContainer'
import HooksCakeContainer from './Component/CakeContainer/HooksCakeContainer';
import HooksIcecreamContainer from './Component/IcecreamContainer/HooksIcecreamContainer';
import IcecreamContainer from './Component/IcecreamContainer/IcecreamContainer';
import NewCakeContainer from './Component/CakeContainer/NewCakeContainer'
import store from './Redux/store'
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/User/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      {/* <NewCakeContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <HooksIcecreamContainer />
      <IcecreamContainer />
      <ItemContainer cake />
      <ItemContainer  /> */}
    </div>
    </Provider>
  );
}

export default App;
