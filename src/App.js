import './assets/styles/global.scss';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
