import { Helmet } from 'react-helmet';
import 'assets/styles/global.css';
import { AppRouter } from 'routes';
function App() {
  return (
    <>
      <Helmet>
        <title>Chinmay Vibhute - chinmayvibhute.me</title>
        <link rel="canonical" href="https://chinmayvibhute.me" />
        <meta name="description" content="Chinmay Vibhute's Website" />
      </Helmet>
      <AppRouter />
    </>
  );
}

export default App;
