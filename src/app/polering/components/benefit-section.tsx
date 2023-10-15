import TextCard from "@/components/text-card";

const BenefitSection = () => {
  return <section>
    <h2 className="text-3xl pb-20 text-center">
      Forbedre bilens utseende - gjenoppliv glansen hos Nanodetailing
    </h2>
    <div className="flex flex-wrap gap-10">
      <TextCard title={"Forbedret utseende"}
                content={"Bilpolering gir kjøretøyet ditt en dyp og skinnende glans, noe som umiddelbart forbedrer utseendet. Det fjerner små riper, swirls og oksidasjon som kan få bilen til å se kjedelig og slitt ut."}/>

      <TextCard title={"Beskyttelse"}
                content={"Polering legger til et beskyttende lag på bilens overflate, som fungerer som en barriere mot skadelige elementer som UV-stråler, forurensninger og vannflekker. Dette bidrar til å forlenge levetiden til lakken."}/>

      <TextCard title={"Verdibevaring"}
                content={"Regelmessig bilpolering kan bidra til å opprettholde bilens verdi. En godt vedlikeholdt og polert bil vil være mer attraktiv for potensielle kjøpere når du bestemmer deg for å selge den."}/>

      <TextCard title={"Bedre kjøreopplevelse"}
                content={"En ren og glinsende bil gir deg en bedre kjøreopplevelse. Det kan også øke stoltheten og tilfredsheten med bilen din."}/>

      <TextCard title={"Fjerning av skitt og flekker"}
                content={"Polering fjerner inngrodd skitt, flekker og fugleskitt, noe som gjør det enklere å holde bilen ren og opprettholde dens utseende."}/>
    </div>
  </section>
}

export default BenefitSection