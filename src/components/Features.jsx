import styles from "../style";
import { features } from "../constants";
import { ButtonPrimary } from "../components"

const Features = () => (
  <section id="features" className={`relative ${styles.flexCenter} md:mt-[150px] mt-[75px] md:mb-[200px] mb-[70px] sm:mb-[100px]`}>
    <div className={`${styles.flexBetween} flex-col w-full z-[1]`}>
      {features.map((feature, index) => (
        <div key={feature.id} className={`${styles.flexBetween} w-full my-[32px] ${index === 0 && "mb-[150px]"} sm:gap-x-[56px] gap-y-[56px] md:gap-y-0 md:flex-row flex-col`}>
          <img src={feature.img} alt={feature.img} className="w-4/5 md:w-auto"/>
          <div className={`${styles.flexStart} flex-col max-w-[600px]`}>
            <div className="mb-[24px]">
              <h2 className={`${styles.heading} md:text-[38px] text-[32px] leading-[50px] mb-6`}>{feature.title}</h2>
              <p className={`md:text-[18px] ${styles.content}`}>{feature.content}</p>
            </div>
            <ButtonPrimary text="Explore Products"/>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute top-[100px] dark-blue-blur z-[0] w-[50%] h-[70%] -left-[30%]"/>
  </section>
)

export default Features