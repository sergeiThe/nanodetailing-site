const CourseSection = () => {
    return (
        <section className="relative py-20 md:px-10 px-8" id="course">
            <div className="">
                <div className="">
                    <h2 className="text-5xl text-center py-5">Hendlex kurs</h2>
                    <p className="max-w-[700px] text-center mx-auto py-6">
                        Har du lyst til å kunne få bruke topp produkter av
                        Hendlex innen keramisk forsegling, beskyttelse og annet
                        bilpleie, må du ha tatt tilsvarende sertifisering.Slik
                        mulighet tilbyr vi her i Nano Detailing. Etter fullført
                        kurs, får du sertifikat og mulighet til å kjøpe og bruke
                        produktene av Hendlex.
                    </p>
                    <div className="max-w-[500px] mx-auto mt-10">
                        <iframe
                            width={"100%"}
                            height="315"
                            src="https://www.youtube.com/embed/X7Q5dNEDat0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
