import {Header} from "@/modules/header";
import Image from "next/image";
import {BgVideo} from "@/components/bg-video";
import {ContactForm} from "@/components/contact-form";
import Card from "@/components/card";
import {AiOutlineSafety} from "react-icons/ai";
import {GiHealthIncrease} from "react-icons/gi";
import {BsCheckAll, BsHandThumbsUpFill} from "react-icons/bs";
import {GrMoney} from "react-icons/gr";
import Link from "next/link";
import ReviewSection from "@/modules/review-section";
import {SecondaryPageMainSection} from "@/modules/secondary-page-main-section";
import {MdOutlineGppGood} from "react-icons/md";
import Divider from "@/components/divider";

const PoleringPage = () => {
  return (
    <>
      <Header offsetBeforeShow={100}/>
      <SecondaryPageMainSection title="Profesjonell polering" image="polering/1.webp" />

  <div className="bg-white rounded-xl max-w-[800px] mx-auto p-10 my-20 text-center font-bold">
    <span className="text-7xl mx-auto inline-block">
      <MdOutlineGppGood/>
    </span>
      <p>Våre eksperter gir din bil en glans som imponerer. Vi bruker avanserte teknikker for å fjerne riper, oksidasjon, og ujevnheter fra lakken, slik at din bil glitrer som aldri før.</p>

  </div>

      <div className="max-w-[1300px] mx-auto sm:p-14 p-8 bg-white lg:my-20 lg:rounded-xl">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
          <div>
            <h2 className="text-3xl pb-20">
              Hvorfor polere bilen?
            </h2>
            <h3>Forbedret utseende</h3>
            <p className="py-2">
              Bilpolering gir kjøretøyet ditt en dyp og skinnende glans, noe som umiddelbart forbedrer utseendet. Det fjerner små riper, swirls og oksidasjon som kan få bilen til å se kjedelig og slitt ut.
            </p>
            <h3>Beskyttelse</h3>
            <p className="py-2">
              Polering legger til et beskyttende lag på bilens overflate, som fungerer som en barriere mot skadelige elementer som UV-stråler, forurensninger og vannflekker. Dette bidrar til å forlenge levetiden til lakken.
            </p>
            <h3>Verdibevaring</h3>
            <p className="py-2">
              Regelmessig bilpolering kan bidra til å opprettholde bilens verdi. En godt vedlikeholdt og polert bil vil være mer attraktiv for potensielle kjøpere når du bestemmer deg for å selge den.
            </p>
            <h3>Bedre kjøreopplevelse</h3>
            <p className="py-2">
              En ren og glinsende bil gir deg en bedre kjøreopplevelse. Det kan også øke stoltheten og tilfredsheten med bilen din.
            </p>
            <h3>Fjerning av skitt og flekker</h3>
            <p className="py-2">
              Polering fjerner inngrodd skitt, flekker og fugleskitt, noe som gjør det enklere å holde bilen ren og opprettholde dens utseende.
            </p>
            <Divider/>
            <p className="py-2">
              Så, å polere bilen er ikke bare kosmetisk, det er også en investering i bilens vedlikehold og verdi. Det gir både økt beskyttelse og et mer tiltalende utseende.
            </p>

          </div>
          <div className="basis-1/2 ">
            <div className="min-h-[300px] w-full relative rounded-xl overflow-hidden">
              <Image
                alt="logo"
                fill
                style={{objectFit: "cover"}}
                src={"/images/ppf/ppf1.webp"}
                quality={75}
                priority
                className=""
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
          <div>
            <div className="min-h-[300px] w-full relative rounded-xl overflow-hidden">
              <Image
                alt="logo"
                fill
                style={{objectFit: "cover"}}
                src={"/images/ppf/ppf2.webp"}
                quality={75}
                priority
                className=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl py-3">Hvem passer den for?</h2>
            <p className="py-2">
              Lakkbeskyttelsesfilm er en allsidig løsning som passer for alle som ønsker å holde kjøretøyets eksteriør i
              upåklagelig stand og beskytte det mot vær og daglig slitasje.
            </p>
          </div>
        </div>
        <h2 className="text-5xl py-20 text-center">Fordeler</h2>
        <div className={"flex gap-5 flex-wrap"}>
          <Card
            icon={<AiOutlineSafety/>}
            title={"Trygghet"}
            content={"Å vite at kjøretøyet ditt er beskyttet mot vanlige veifarer og daglig slitasje, kan gi deg trygghet."}
          />
          <Card
            icon={<GiHealthIncrease/>}
            title={"Selvhelbredende egenskaper"}
            content={"PPF har selvhelbredende egenskaper, noe som betyr at mindre riper kan forsvinne med varme eller over tid."}
          />
          <Card
            icon={<BsHandThumbsUpFill/>}
            title={"Enkel vedlikehold"}
            content={"Rengjøring av PPF er like enkelt som å vaske bilen din, noe som gjør vedlikeholdet problemfritt."}
          />
          <Card
            icon={<GrMoney/>}
            title={"Økt gjenkjøpsverdi"}
            content={"Med godt vedlikeholdt lakk har kjøretøyet ditt sannsynligvis en høyere gjenkjøpsverdi når du bestemmer deg for å selge eller bytte det inn."}
          />
          <Card
            icon={<BsCheckAll/>}
            title={"Bevaring av lakk"}
            content={"PPF beskytter din kjøretøys originale lakk mot skader som steinsprut, riper og annen mindre skade, noe som hjelper med å opprettholde det plettfrie utseendet."}
          />
        </div>

        <div className="flex flex-col-reverse justify-center items-center py-32">

          <div className="basis-1/2 text-center">
            <h2 className="text-2xl  text-black">Vi tilbyr 10 års garanti</h2>
            <p>Om det skulle skje noen misfarging, sprekker, blemmer eller delaminering, vil vi dekke feilene!</p>
            <Link href={'/betingelser'} className="text-red-500">Se betingelsene her</Link>
          </div>
          <div className="relative basis-1/2 min-w-[70vw] min-h-[300px]">
            <Image
              alt="logo"
              fill
              style={{objectFit: "contain"}}
              src={"/images/garanti.png"}
              quality={75}
              priority
              className=""
            />
          </div>
        </div>

        <ReviewSection/>

      </div>


      <div className="px-5">
        <h2 id="contact" className="text-3xl px-3 pt-20 text-center">Kontakt</h2>
        <ContactForm/>
      </div>
    </>
  )
}

export default PoleringPage