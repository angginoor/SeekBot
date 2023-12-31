import styles from "../style"

const Article = ({ imgUrl, content, isBlog5 }) => (
    <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-[16px]">
        <div className={`rounded-[16px] w-[300px] h-full`}>
            <img src={imgUrl} alt="image" className={`rounded-[16px]`} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary w-auto rounded-b-[16px]" />
        <div className={`absolute inset-0 ${styles.flexCenter} flex-col px-8 text-center  ${isBlog5 ? "hover:translate-y-[20%] translate-y-[40%]" : "hover:translate-y-0 translate-y-[30%]"} transition-all`}>
            <h2 className="font-manrope font-extrabold text-[24px] text-white">{content}</h2>
        </div>
    </div>
)

export default Article