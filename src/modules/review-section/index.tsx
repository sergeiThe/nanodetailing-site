import Image from "next/image";
import Review from "@/modules/review-section/components/review";


const ReviewSection = () => {
  return(
    <section className="py-10 text-center flex flex-col items-center px-2 sm:px-10 relative max-w-[1000px] mx-auto bg-white my-20 rounded-xl">
      <h2 className="text-black py-10">Hva folk sier om oss</h2>
      <div className="relative w-full h-40">
        <Image
          alt="reviewscore"
          fill
          style={{objectFit: "contain"}}
          src={"/images/reviews/google-reviews.png"}
          quality={75}
          priority
          className=""
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {Array.from({length: 21}, (_, i) => (
          <Review key={i} imgPath={`/images/reviews/${i+2}.png`}/>
        ))}


      </div>
    </section>
  )
}

export default ReviewSection