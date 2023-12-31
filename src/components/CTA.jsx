import styles from "../style"
import {ButtonPrimary} from "../components"

const CTA = () => (
  <section id="CTA" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className={`bg-orange-gradient w-full ${styles.flexCenter} flex-col py-[48px] rounded-[16px] ${styles.paddingX}`}>
    <h3 className="font-manrope text-black font-extrabold text-[32px] mb-[24px]">Ready to level up your business with AI powered?</h3>
    <ButtonPrimary text="Talk to an Expert"/>
    </div>
  </section>
)

export default CTA