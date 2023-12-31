import styles from "../style";
import {clients} from '../constants'

const Clients = () => (
  <section className={`${styles.flexCenter} flex-col sm:mb-[100px] mb-14`}>
    <h1 className={`${styles.heading} sm:text-[48px] text-[38px] text-center`}>Trust by More Than 200+ Companies</h1>
    <div className={`ticker-container w-full mt-[36px]`}>
      <div className="ticker-content items-center">
        {clients.map((client) => (
        <img 
          key={client.id}
          src={client.logo} 
          alt={client.logo} 
          className="h-[36px] mx-[24px] items-center" />
        ))}
        {clients.map((client) => (
        <img 
          key={client.id}
          src={client.logo} 
          alt={client.logo} 
          className="h-[36px] mx-[24px] items-center"/>
        ))}
      </div>
    </div>
  </section>
)

export default Clients