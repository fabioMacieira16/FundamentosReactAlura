import Form from '../Form'
import List from '../List'
import Style from './App.module.scss'

function App() {
  return (
    <div className={Style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
