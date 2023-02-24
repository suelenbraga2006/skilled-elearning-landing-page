import './assets/styles/global.scss';
import Banner from './components/Banner/banner';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Banner />
          <Courses />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
