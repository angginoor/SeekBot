import styles from "./style"
// import { Navbar, Header, Stats, About, InstantSupport, ExclusiveDeals, Clients, Testimonials, CTA, Footer } from "./components";
import {About, Blog, Clients, CTA, Features, Footer, Header, Navbar, Stats, Testimonials} from "./components"

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className="px-[48px] flex justify-center items-center w-full">
        <Navbar/>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
          <Stats />
          <About />
          <Features />
          <Clients />
          <Testimonials />
          <Blog />
          <CTA />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
