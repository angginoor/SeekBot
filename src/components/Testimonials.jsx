import styles from "../style";
import { feedback } from "../constants";
import { quotesGradient } from "../assets";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <h1 className="title-gradient font-manrope font-bold text-[38px]">What people are saying about us</h1>
    <div className="flex flex-wrap sm:justify-evenly justify-center w-full feedback-container relative z-[1] mt-[24px]">
      {feedback.map((review) => (
        <div key={review.id} className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] feedback-card ">
          <img src={quotesGradient} alt="quotes" className="w-[56px] h-[56px] mb-[24px]"/>
          <p className="font-manrope text-aqua text-[14px] md:text-[16px] leading-[30px]">{review.content}</p>
          <div className="flex flex-row mt-[24px] items-center">
            <img src={review.img} alt={review.name} className="w-[48px] h-[48px]"/>
            <div className="flex flex-col ml-[16px]">
              <h4 className="font-manrope font-semibold text-[20px] leading-[32px] text-white">{review.name}</h4>
              <p className="font-manrope font-normal text-[16px] leading-[24px] text-dimWhite">{review.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute top-0 dark-blue-blur z-[0] w-[50%] h-[80%] -right-[30%]"/>
  </section>
)


export default Testimonials