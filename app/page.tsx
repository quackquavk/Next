import Image from "next/image";
import { CustomButton, Hero, SearchBar, CustomFilter} from '../components'


export default function Home(){
  return <main className="overflow-hidden">
      <Hero />
      <div className="max-width padding-x padding-y mt-12">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might hate</p>
          <div className="home__filters">
          <SearchBar />
          <CustomFilter
          title="fuel"
          />
          <CustomFilter
          title="year"
          />
          </div>

        </div>
      </div>
  </main>
}