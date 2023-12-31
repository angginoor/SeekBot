import styles from "../style";
import { Article } from "../components";
import { blog1, blog2, blog3, blog4, blog5 } from "../assets";

const Blog = () => (
  <section className={`relative ${styles.flexCenter} flex-col md:mt-[100px] mt-[75px] mb-[50px] w-full`}>
    <div className={`flex justify-start items-center text-start z-[1] w-full mb-[36px]`}>
      <h1 className={`${styles.heading} md:text-[48px] text-[36px] md:leading-[60px] leading-[50px] lg:max-w-[900px] w-full`}>Welcome to our world, Where innovation never sleeps.</h1>
    </div>
    <div className={`${styles.flexCenter} flex-wrap z-[1]`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[26px] gap-y-[30px]">
        <Article imgUrl={blog1} content="GPT 3 and Open AI"/>
        <Article imgUrl={blog2} content="GPT 3 and Open AI"/>
        <Article imgUrl={blog3} content="GPT 3 and Open AI"/>
        <Article imgUrl={blog4} content="GPT 3 and Open AI"/>
      </div>
      <div className="md:ml-[26px] mt-[30px] md:mt-0">
        <Article imgUrl={blog5} content="GPT 3 and Open AI" isBlog5={true}/>
      </div>
    </div>

    <div className="absolute top-[80px] dark-green-blur z-[0] w-[50%] h-[50%] -left-[30%]"/>
  </section>
)

export default Blog