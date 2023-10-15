import Image from "next/image";
import Review from "@/modules/review-section/components/review";


const ReviewSection = () => {
  return(
    <div className="py-10 text-center flex flex-col items-center px-10 relative">
      <h2 className="text-black py-10">Google anmeldelser</h2>
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

      <div className="flex flex-col gap-5 w-full">
        {Array.from({length: 21}, (_, i) => (
          <Review key={i} imgPath={`/images/reviews/${i+2}.png`}/>
        ))}


      </div>
    </div>
  )
}

export default ReviewSection