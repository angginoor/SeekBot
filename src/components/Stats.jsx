import styles from "../style"
import { stats } from "../constants"

const Stats = () => (
  <section className={`${styles.flexBetween} flex-wrap sm:mb-[100px] mb-14`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`}>
        <h4 className="font-manrope font-semibold xs:text-[40px] text-[30px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.total}
        </h4>
        <p className="font-manrope font-medium xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
)

export default Stats