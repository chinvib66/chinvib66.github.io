import { NavBar } from 'components/Nav';
import { Helmet } from 'react-helmet';
import { HomePage } from 'pages/Home';
import 'assets/styles/global.css';
function App() {
  return (
    <>
      <Helmet>
        <title>Chinmay Vibhute - chinmayvibhute.me</title>
        <link rel="canonical" href="https://chinmayvibhute.me" />
        <meta name="description" content="Chinmay Vibhute's Website" />
      </Helmet>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </>
  );
}

export default App;
