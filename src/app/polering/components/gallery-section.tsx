import ImageCover from "@/components/image-cover";

const GallerySection = () => {
  return (
    <section>
      <h2 className="text-center py-32">Noen av våre prosjekter som har inkludert polering</h2>
    <div className="flex flex-wrap gap-5 ">
      {Array.from({length: 7}, (_, i) => {
        return (
          <div className="basis-[300px] grow rounded-2xl overflow-hidden">
            <ImageCover key={"img"+i} imgPath={`/images/polering/work${i +1}.webp`} alt={"polering work"} height={"h-52"}/>
          </div>
        )
      })}

    </div>
    </section>
  )
}
export default GallerySection