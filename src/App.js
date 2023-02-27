import './assets/styles/global.scss';

import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const courses = [
  {
    id: 1,
    title: 'Animation',
    text: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    icon: 'animation',
  },
  {
    id: 2,
    title: 'Design',
    text: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    icon: 'design',
  },
  {
    id: 3,
    title: 'Photography',
    text: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    icon: 'photography',
  },

  {
    id: 4,
    title: 'Crypto',
    text: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    icon: 'crypto',
  },
  {
    id: 5,
    title: 'Business',
    text: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    icon: 'business',
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Courses courses={courses} />
      </main>
      <Footer />
    </>
  );
}

export default App;
