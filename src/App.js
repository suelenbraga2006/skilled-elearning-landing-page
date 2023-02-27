import './assets/styles/global.scss';

import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Courses />
      </main>
      <Footer />
    </>
  );
}

export default App;
