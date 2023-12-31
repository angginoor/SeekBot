import styles from "../style";
import { ButtonPrimary, ButtonSecondary } from "../components"

const Header = () => (
  <section id="home" className={`${styles.flexCenter} flex-col md:mt-[200px] mt-[120px] mb-[50px]`}>
    <div className={`z-[1] ${styles.flexCenter} flex-col top-30`}>
      <h1 className="title-gradient md:text-[62px] font-extrabold font-manrope text-center mb-[24px] leading-[75px] text-[56px]">
        Intelligent Solutions for Business Success
      </h1>
      <p className={`text-center max-w-[780px] ${styles.content}`}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</p>

      <div className={`mt-[50px] ${styles.flexCenter} flex-col justify-between xs:flex-row w-full md:w-[350px]`}>
        <ButtonPrimary text="Get a demo"/>
        <ButtonSecondary text="Pricing"/>
      </div>
    </div>

    <div className="absolute top-0 dark-blue-blur z-[0] w-[50%] h-[80%] -left-[30%]"/>
  </section>
)

export default Header