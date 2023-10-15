import {Header} from "@/modules/header";

import ReviewSection from "@/modules/review-section";
import {SecondaryPageMainSection} from "@/modules/secondary-page-main-section";
import {MdOutlineGppGood} from "react-icons/md";

import BenefitSection from "@/app/polering/components/benefit-section";
import ContactSection from "@/modules/contact-section";

import ImageCover from "../../components/image-cover";
import GallerySection from "@/app/polering/components/gallery-section";

const PoleringPage = () => {
  return (
    <>
      <Header offsetBeforeShow={100}/>
      <SecondaryPageMainSection title="Profesjonell polering" image="polering/1.webp"/>
      <div className="px-5">

      <div className="bg-white rounded-xl max-w-[800px] mx-auto p-10 my-20 text-center font-bold">
            <span className="text-7xl mx-auto inline-block">
            <MdOutlineGppGood/>
            </span>
        <p>Våre eksperter gir din bil en glans som imponerer. Vi bruker avanserte teknikker for å fjerne riper,
          oksidasjon, og ujevnheter fra lakken, slik at din bil glitrer som aldri før.</p>

      </div>
      </div>

      <div className="max-w-[1300px] mx-auto sm:p-14 p-8 lg:my-20 lg:rounded-xl">
        <BenefitSection/>
        <GallerySection/>
        <ReviewSection/>
      </div>
      <ContactSection/>
    </>
  )
}

export default PoleringPage