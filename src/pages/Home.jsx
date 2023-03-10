import Category from '../components/Category'
import Collection from '../components/Collection'
import Highlight from '../components/Highlight'
import Hero from '../components/Hero'


const Home = ({ listings, user}) => {

  return (
    <div className="bg-white">
      <Hero />
      <main>
        <Category />
        <Collection listings={listings} user={user}/>
        <Highlight />
      </main>
    </div>
  )
}

export default Home