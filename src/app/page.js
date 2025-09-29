import MainPage from './pages/Main/page'
import Cards from './pages/Cards/page'
import FitnessPlansPage from './pages/FitnessPlansPage/page'
import NotePage from './pages/NotePage/page'
import Tran from './pages/Tran/page'
import Subscribe from './pages/Subscribe/page'
import Join from './pages/Join/page'
import FeedPage from './pages/FeedPage/page'
import Follow from './pages/Follow/page'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact/page'
export default function Home() {

  return (
    <>
      <MainPage />
      <Cards />
      <FitnessPlansPage />
      <NotePage />
      <Subscribe />
      <Tran />
      <Join />
      <FeedPage />
       <Contact />
      <Follow />
      <Footer />
     
    </>
  );
}