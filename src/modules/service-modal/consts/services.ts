import { Service } from "@/shared/model/serviceSlice";

export type ServiceBodyContent = {
    [p: string]: string | undefined;
};

export type ServiceBody = {
    name: string;
    content: ServiceBodyContent;
    image: string;
};

type ServicesRecord = Partial<Record<Service, ServiceBody>>;

export const services: ServicesRecord = {
    "keramisk-coating": {
        name: "Keramisk lakkforsegling",
        content: {
            p1: "Keramisk lakkforsegling er en avansert metode der man bruker nanoteknologi og legger et lag kvarts på lakkoverflaten. Overflatespenningen i lakken endres slik at den vannavvisende(hydrofobiske) effekten blir optimal.",
            p2: "Behandlingens varighet er lengre enn for syntetisk lakkforsegling. Lakkforsegling passer for deg som ønsker en lettere bilvedlikehold, samt redusere bilens verditap.",
            p3: "Du lurer kanskje på hva fordelene med å ha et keramisk belegg bilen er. Enkelt sagt kan et keramisk belegg betraktes som et langsiktig alternativ til tradisjonelle voks- eller malingsforseglinger.",
            p4: "Å gi enestående beskyttelse for noen år i stedet for uker eller måneder betyr at du vil ha det lettere for å vedlikeholde kjøretøyets utseende. Et keramisk belegg vil holde lakken renere i lengre tid, noe som resulterer i mindre tid på å vaske bilen og mer tid til å nyte den.",
        },
        image: "tesla1.png",
    } satisfies ServiceBody,
    ppf: {
        name: "PPF",
        content: {
            p1: "PPF (Paint Protection Film) eller lakkbeskyttelsesfilm er en gjennomsiktig film med selv-helbredende egenskaper som legges på bilen som et nesten usynlig skjold for å beskytte den mot steinsprut, riper og små bulker. Dessuten, er insekter, harpiks og kalk ikke farlige lenger på grunn av filmens sterke hydrofobiske effekt.",
            p2: "Har du en leasingbil, er denne servicen et nødvendig tiltak mot store regninger på lakkskader. Hvis du eier bilen selv og er interessert i å bevare bilen i en lang periode, er PPF et fantastisk valg.",
            p3: "Akkurat nå kjører vi et tilbud på -10% på lakkbeskyttelse av mest utsatte bildeler som bak hjulbuer, lykter foran og kanaler.",
        },
        image: "tesla2.png",
    } satisfies ServiceBody,
    "chrome-delete": {
        name: "Chrome Delete",
        content: {
            p1: "Chrome Delete er en spesifikk type vinylfolie som er designet for å skjule kromdelene rundt vinduer og andre steder på kjøretøyet.",
            p2: "Mange bilister anser denne kromdekorasjonen for å være en utdatert designtrend, så en kromsletting lar bileiere få en mer moderne utseende for kjøretøyet.",
            p3: "Ønsker du en mer sportslig utseende og/eller beskytte kromdetaljene mot riper og sterke kjemikaljer, bestill chrome delete hos oss.",
        },
        image: "tesla3.png",
    } satisfies ServiceBody,

    solfilm: {
        name: "Solfilm",
        content: {
            p1: "Solfilm beskytter deg selv, dine passasjerer og bilens interiør mot skadelige UV-stråling. Den gir et behagelig indreklima i bilen, verner ditt privatliv, ved å forhindre andre i å kikke inn. Alt dette er garantert ved en profesjonell montering av solfilm fra Nanodetailing.",
            p2: "- Holder bilen kjølig og avlaster ditt klimaanlegg",
            p3: "- Blokkerer 99,9% av den skadelige UV-strålingen",
            p4: "- Reduserer falmning av interiør",
            p5: "- Blendingsreduserende",
            p6: "- Beskyttelse mot glassplinter ved ulykker",
        },
        image: "volk1.png",
    } satisfies ServiceBody,
    helfoliering: {
        name: "Helfoliering",
        content: {
            p1: "Det er stor utvalg av farger. Mulighetene er det mange av. For eksempel kan man kun helfoliere halvparten av bilen, kun helfoliere taket eller foliere hele kjøretøyet.",
            p2: "Det er over 100 forskjellige type farger man kan velge mellom. Mest brukte merker er Avery Dennison, 3M, PWF by Bruxsafol.",
        },
        image: "volk2.png",
    } satisfies ServiceBody,
    polering: {
        name: "Polering",
        content: {
            p1: "En viktig del av bilpleien er polering som lar deg raskt og rimelig fjerne av riper og oksidering samt bringe tilbake tilstanden “nettopp fra salongen”.",
            p2: "Under kjøring utsettes bilen for ulike faktorer som starter med værforhold (temperaturendringer, sol, nedbør) og avslutter med fin grus som flyr ut under hjulene. Som et resultat oppstår små skader på overflaten, noe som forverrer tilstanden til lakken betydelig.",
            p3: "Ved hjelp av profesjonell polering vil kjøretøyet se ut som ny, sløvhet, lette riper, spor etter en aggressiv bilvask osv. vil forsvinne. ",
        },
        image: "volk2.png",
    } satisfies ServiceBody,
} satisfies ServicesRecord;
