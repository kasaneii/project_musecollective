import { Navbar, Footer } from '../components';
import { About, Hero, Work, Services, Partner } from '../sections';

const Page = () => (
  <div className="bg-Cararra overflow-hidden">
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Services/>
    <Partner/>
    <Footer/>
  </div>
);

export default Page;