import "./App.css";
import Head from "./components/head/Head";
import Followers from "./components/followers/Followers";
import Publico from "./components/publico/Publico";
import Beneficios from "./components/beneficios/Beneficios";
import Depoimentos from "./components/depoimentos/Depoimentos";
import './styles/Global.css';

function App() {
  return <>
  <Head/>
  <Followers/>
  <Publico/>
  <Beneficios/>
  <Depoimentos/>
  </>;
}

export default App;
