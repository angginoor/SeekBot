import styles from "../style";
import {seekBot} from "../assets";
import { footerLinks } from "../constants";
import { ButtonPrimary } from "../components"

const Footer = () => (
  <section className={`${styles.flexBetween} ${styles.paddingY} flex-col w-full`}>
    <div className={`flex justify-between items-start w-full sm:flex-row flex-col sm:gap-x-[36px] md:gap-y-0 gap-y-[36px]`}>
      <div className="max-w-[336px]">
        <img src={seekBot} alt="logo" className="h-[36px] mb-5"/>
        <p className="font-manrope text-gray text-[14px] md:text-[16px] leading-[30px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex-1 max-w-[650px]">
        <h2 className="font-manrope text-[24px] md-[32px] text-gray font-extrabold">Sign Up to Our Newsletter</h2>
        <input type="text" placeholder="Full name" className="form-input px-[24px] py-[16px] font-manrope font-semibold text-[18px] max-w-[678px] w-full bg-[#0C404C] rounded-full text-gray placeholder:text-gray/40 border border-none focus:border-[rgba(8, 137, 165, 1)] my-4"/>
        <input type="Email" placeholder="Email" className="form-input px-[24px] py-[16px] font-manrope font-semibold text-[18px] max-w-[678px] w-full bg-[#0C404C] rounded-full text-gray placeholder:text-gray/40 mb-4"/>
        <ButtonPrimary text="Subscribe"/>
      </div>
    </div>

    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-[80px] mt-10">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-manrope font-medium text-[18px] leading-[27px] text-white">
            {footerlink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerlink.links.map((link, index) => (
              <li
                key={link.name}
                className={`font-manrope font-normal text-[16px] leading-[24px] text-dimWhite hover:text-aqua cursor-pointer ${
                  index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div>
      
    </div>
  </section>
)

export default Footer