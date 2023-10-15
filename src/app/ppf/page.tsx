import {Header} from "@/modules/header";
import {BgVideo} from "@/components/bg-video";
import Image from "next/image";
import {ContactForm} from "@/components/contact-form";
import Card from "@/components/card";
import {AiOutlineSafety} from "react-icons/ai"
import {GiHealthIncrease} from "react-icons/gi"
import {BsCheckAll, BsHandThumbsUpFill} from "react-icons/bs";
import {GrMoney} from "react-icons/gr";
import Link from "next/link";
import {Button} from "@/shared/ui/button/Button";
import ReviewSection from "@/modules/review-section";


const PPFPage = () => {
  return (
    <>
      <Header offsetBeforeShow={100}/>
      <BgVideo
        content={
          <div className="flex flex-col gap-10">
            <div className="h-32 w-full relative">
              <Image
                alt="logo"
                fill
                style={{objectFit: "contain"}}
                src={"/images/logo.png"}
                quality={75}
                priority
                className="md:-ml-4"
              />
            </div>
            <h1 className="text-white sm:text-5xl text-xl text-center">
              PPF Lakkbeskyttelse
            </h1>
          </div>
        }
        url="https://www.youtube.com/embed/a9Bc3Ahpc6c?mute=1&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=a9Bc3Ahpc6c"
      />

      <div className="max-w-[1300px] mx-auto sm:p-14 p-8 bg-white lg:my-20 lg:rounded-xl">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
          <div>
            <h2 className="text-3xl py-3">
              Hva er PPF?
            </h2>
            <p className="py-2">
              Lakkbeskyttelsesfilm (PPF) er en gjennomsiktig termoplastisk film som påføres eksteriøroverflatene på
              kjøretøy for å beskytte dem mot ulike typer skader. Denne beskyttende laget skjermer effektivt bilens
              opprinnelige lakk mot riper, steinsprut, UV-stråler og andre potensielle farer, samtidig som den bevarer
              bilens utseende og gjenkjøpsverdi.
            </p>
            <p className="py-2">
              PPF er skåret på mål for å passe nøyaktig til kjøretøyets konturer, noe som gjør den nesten usynlig når
              den er påført. Den er et populært valg for bilentusiaster og de som ønsker å opprettholde kjøretøyets
              estetikk og beskytte det mot daglig slitasje.
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

export default PPFPage