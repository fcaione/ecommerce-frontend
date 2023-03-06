import Category from '../components/Category'
import Collection from '../components/Collection'
import Highlight from '../components/Highlight'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = ({ listings }) => {

  return (
    <div className="bg-white">
      <Hero />
      <main>
        <Category />
        <Collection listings={listings}/>
        <Highlight />
      </main>
      <Footer />
    </div>
  )
}

export default Home