import Category from '../components/Category'
import Featured from '../components/Featured'
import Collection from '../components/Collection'
import Highlight from '../components/Highlight'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <main>
        <Category />
        <Featured />
        <Collection />
        <Highlight />
      </main>
      <Footer />
    </div>
  )
}

export default Home