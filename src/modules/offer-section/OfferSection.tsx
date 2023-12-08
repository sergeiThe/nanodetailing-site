import {Button} from "@/shared/ui/button/Button";
import OfferCard from "@/modules/offer-section/components/OfferCard";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {open} from "@/shared/model/serviceSlice";

const OfferSection = () => {
  const navigate = useRouter()
  const dispatch = useAppDispatch();
  return (
    <section className="min-h-[400px] max-w-[1300px]
    bg-gradient-to-bl from-slate-900 to-slate-500 shadow-lg
    mx-auto lg:mt-20 p-10 lg:rounded-2xl">
      <h2 className="text-center py-10 text-5xl text-white">Vintertilbud</h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <OfferCard
          discount={20}
          title={"Keramisk coating"}
          content={"Beskytt bilen og bevar bilens verdi"}
          buttonCb={() => navigate.push('/coating')}
        />
        <OfferCard
          discount={15}
          title={"Solfilm"}
          content={"Beskytt deg selv og dine passasjerer"}
          buttonCb={() => dispatch(open('solfilm'))}
        />
        <OfferCard
          discount={15}
          title={"Polering"}
          content={"Gjenoppliv glansen hos Nanodetailing"}
          buttonCb={() => navigate.push('/polering')}
        />

      </div>
    </section>
  )
}

export default OfferSection