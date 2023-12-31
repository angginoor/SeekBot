import styles from "../style";

const About = () => (
  <section className={`${styles.flexStart} relative flex-col md:flex-row`}>
    <div className={`rounded-[24px] p-[2px] bg-gradient-to-l from-aqua to-oldGreen flex-grow basis-2/5 h-full z-[1]`}>
      <div className={`${styles.paddingY} px-[48px] bg-[#062629] rounded-[24px] flex flex-col h-full`}>
        <div className="mb-[20px]">
          <div className="w-[38px] h-[4px] bg-purple-gradient rounded-full mb-[8px]" />
          <h2 className="font-manrope text-white font-medium text-[20px] md:text-[24px]">What is SeekBot</h2>
        </div>
        <p className={`${styles.content}`}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he.</p>
      </div>
    </div>
    <div className={`rounded-[24px] p-[2px] bg-gradient-to-l from-aqua to-oldGreen flex-initial mt-[24px] md:ml-[32px] md:mt-0 basis-3/5 z-[1]`}>
      <div className={`${styles.paddingY} px-[48px] bg-[#062629] rounded-[24px] flex flex-col h-full`}>
        <div className="mb-[20px]">
          <div className="w-[38px] h-[4px] bg-purple-gradient rounded-full mb-[8px]" />
          <h2 className="font-manrope text-white font-medium text-[20px] md:text-[24px]">Why Your Business Needs SeekBot</h2>
        </div>
        <p className={`${styles.content}`}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. Friendly bachelor entrance to on by. At jointure ladyship an insisted so humanity he. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. We so opinion friends me message as delight. Whole front do of plate heard.</p>
      </div>
    </div>

    <div className="absolute top-0 dark-green-blur z-[0] w-[50%] h-[80%] -right-[30%]"/>
  </section>
)

export default About