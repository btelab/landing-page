<template>
    <div class="w-full">

        <div class="w-full flex flex-col bg-black pt-28 pb-28">
            <div class="container mx-auto visible xl:hidden px-5">
                <div class="flex flex-col items-center justify-center bg-grey">
                    <nuxt-img format="webp" class="object-contain py-2" :src="micro1" alt="Microfabrication 1"
                        fetchpriority="low" width="160" height="134" blur-up quality="100" />

                    <nuxt-img format="webp" class="object-contain py-2" :src="micro2" alt="Microfabrication 2"
                        fetchpriority="low" width="139" height="211" blur-up quality="100"
                        style="object-fit: scale-down;" />
                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h1 class="font-raleway font-thin lg:text-5xl md:text-4xl text-3xl mb-16">Microfabrication and OOC
                    </h1>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">Organ-on-a-chip (OoC)
                        platforms
                        seek to recapitulate certain aspects of human organ physiology at a microscopic scale by
                        integrating
                        microfluidics and three-dimensional (3D) models of human tissues. OoCs offer a vast number of
                        applications in almost every aspect of the human anatomy. For instance, OoCs will be able to
                        provide
                        accurate and reliable predictions of the effects of drugs and toxins on human bodies in the near
                        future. Nowadays, we are working on developing personalized physiological models that we hope
                        will
                        be used as a versatile platform to develop more precise medical therapies. Our research efforts
                        are
                        also focused on observing the essential functions of cells and the interactions between the
                        input
                        and output, which will also be crucial for reducing the experimental work on animal models,
                        alined
                        with the principles of the 3Rs (Replacement, Reduction and Refinement).</p>
                </div>
            </div>

            <div class="container hidden mx-auto xl:flex">
                <div class="w-1/3 bg-grey h-auto">
                    <div class="flex flex-col h-screen items-center justify-center pt-36 pb-16">
                        <nuxt-img format="webp" class="object-contain pb-12" :src="micro1" alt="Microfabrication 1"
                            fetchpriority="low" width="160" height="134" blur-up quality="100" />
                        <nuxt-img format="webp" class="object-contain" :src="micro2" alt="Microfabrication 2"
                            fetchpriority="low" width="139" height="211" blur-up quality="100" />

                    </div>
                </div>

                <div class="w-2/3 bg-white md:px-20 py-32 text-center">
                    <h1 class="font-raleway font-thin lg:text-5xl md:text-3xl text-3xl mb-16">Microfabrication and OOC
                    </h1>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">Organ-on-a-chip (OoC)
                        platforms
                        seek to recapitulate certain aspects of human organ physiology at a microscopic scale by
                        integrating
                        microfluidics and three-dimensional (3D) models of human tissues. OoCs offer a vast number of
                        applications in almost every aspect of the human anatomy. For instance, OoCs will be able to
                        provide
                        accurate and reliable predictions of the effects of drugs and toxins on human bodies in the near
                        future. Nowadays, we are working on developing personalized physiological models that we hope
                        will
                        be used as a versatile platform to develop more precise medical therapies. Our research efforts
                        are
                        also focused on observing the essential functions of cells and the interactions between the
                        input
                        and output, which will also be crucial for reducing the experimental work on animal models,
                        alined
                        with the principles of the 3Rs (Replacement, Reduction and Refinement).</p>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col bg-black pt-28 pb-28" id="bioprinting">
            <div class="container mx-auto visible xl:hidden px-5">
                <div class="flex flex-col justify-center items-center bg-grey py-8">
                    <nuxt-img format="webp" class="object-contain py-2" :src="manufacturing1" alt="Manufacturing 1"
                        fetchpriority="low" width="316" height="auto" blur-up quality="100" />

                    <nuxt-img format="webp" class="object-contain py-2" :src="manufacturing2" alt="Manufacturing 2"
                        fetchpriority="low" width="176" height="186" blur-up quality="100"
                        style="object-fit: scale-down;" />

                    <nuxt-img format="webp" class="object-contain py-2" :src="manufacturing3" alt="Manufacturing 3"
                        fetchpriority="low" width="180" height="145" blur-up quality="100"
                        style="object-fit: scale-down;" />
                    
                    <nuxt-img format="webp" class="object-contain py-2" :src="manufacturing4" alt="Manufacturing 4"
                        fetchpriority="low" width="200" height="200" blur-up quality="100"
                        style="object-fit: scale-down;" />
                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h2 class="font-raleway font-thin lg:text-5xl text-4xl mb-16">Additive manufacturing, 3D
                        bioprinting and XR technologies</h2>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">3D bioprinting is an
                        emerging
                        technology that can spatially control the construction
                        process of engineered tissues. The BTELab focuses on controlling the printed constructs'
                        architecture, morphology, and biological properties to generate 3D platforms that reproduce
                        their
                        human equivalents fairly. Our latest works show an improvement in this technology for different
                        aspects, such as greater functionality of the printed tissues through better vascularization and
                        exploring the synergy with other additive manufacturing techniques. Our team's
                        multidisciplinarity
                        enables the control of the process from the early stage of machine design to cell preparation,
                        which
                        allows us to adapt the 3D printers to the specific needs of different projects and research
                        lines.<br />The main applications of our bioprinted constructs in the lab are the following:</p>
                    <ul
                        class="font-avenir font-sm text-base list-inside list-disc align-center tracking-mid leading-6 py-3">
                        <li>Study of tissue and organ regeneration</li>
                        <li>Explore mechanisms of diseases</li>
                        <li>Drug sensitivity tests</li>
                        <li>Drug development</li>
                    </ul>
                    <p class="font-avenir font-sm text-base md:px-24 tracking-mid leading-6">We are developing broad
                        collaborations with various stakeholders to investigate other
                        potential avenues of investigation and treatment.</p>
                    <h3 class="font-raleway font-sm text-2xl md:mb-4 mt-10 pb-5">3D PRINTING IN CLINICS</h3>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">We are interested in
                        applying
                        3D printing techniques in clinical contexts to create
                        realistic and anatomically precise 3D printed models generated from medical images for surgery
                        planning, training, and teaching applications. Together with other medical departments and
                        hospital
                        services, we have started a pioneer work to provide them with these complex and personalized 3D
                        realistic models that can potentially be used in their surgeries or teaching activities. BTELab
                        facilities include the most advanced technologies to create the models in different polymers and
                        resins, controlling not only colors and textures but also stiffness and elongation. Our
                        expertise in
                        medical image processing and digital model manipulation is essential to be capable of extracting
                        the
                        whole complexity and anatomical structure of the human organs and tissues from the medical
                        images.
                    </p>
                    <h3 class="font-raleway font-sm text-2xl md:mb-4 mt-10 pb-5">XR TECHNOLOGIES</h3>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">Our research is also dedicated
                        to creating extended reality (XR) environments for manipulating personalized patient anatomical
                        models, facilitating complex surgical planning and medical education. We're developing virtual
                        reality (VR) and augmented reality (AR) systems to enrich surgical teaching methods. Our current
                        focus is on integrating advanced haptic feedback through mixed reality (MR) phantoms, pushing
                        the boundaries of immersive medical training.
                    </p>
                </div>
            </div>

            <div class="container hidden mx-auto xl:flex">
                <div class="w-1/3 bg-grey h-auto">
                    <div class="flex flex-col h-full justify-center items-center pt-36 pb-16">

                        <nuxt-img format="webp" class="object-contain pb-8" :src="manufacturing1" alt="Manufacturing 1"
                            fetchpriority="low" width="216" height="144" blur-up quality="100" />



                        <nuxt-img format="webp" class="object-contain pb-8" :src="manufacturing2" alt="Manufacturing 2"
                            fetchpriority="low" width="176" height="186" blur-up quality="100"
                            style="object-fit: scale-down;" />



                        <nuxt-img format="webp" class="object-contain pb-8" :src="manufacturing3" alt="Manufacturing 3"
                            fetchpriority="low" width="180" height="145" blur-up quality="100"
                            style="object-fit: scale-down;" />

                        <nuxt-img format="webp" class="object-contain" :src="manufacturing4" alt="Manufacturing 4"
                            fetchpriority="low" width="256" height="256" blur-up quality="100"
                            style="object-fit: scale-down;" />

                    </div>
                </div>

                <div class="w-2/3 bg-white md:px-20 py-32 text-center">
                    <h2 class="font-raleway font-thin lg:text-5xl text-3xl mb-16">Additive manufacturing, 3D
                        bioprinting and XR technologies</h2>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">3D bioprinting is an
                        emerging
                        technology that can spatially control the construction
                        process of engineered tissues. The BTELab focuses on controlling the printed constructs'
                        architecture, morphology, and biological properties to generate 3D platforms that reproduce
                        their
                        human equivalents fairly. Our latest works show an improvement in this technology for different
                        aspects, such as greater functionality of the printed tissues through better vascularization and
                        exploring the synergy with other additive manufacturing techniques. Our team's
                        multidisciplinarity
                        enables the control of the process from the early stage of machine design to cell preparation,
                        which
                        allows us to adapt the 3D printers to the specific needs of different projects and research
                        lines.<br />The main applications of our bioprinted constructs in the lab are the following:</p>
                    <ul class="font-avenir list-inside list-disc  font-sm text-base align-center my-3 tracking-mid">
                        <li>Study of tissue and organ regeneration</li>
                        <li>Explore mechanisms of diseases</li>
                        <li>Drug sensitivity tests</li>
                        <li>Drug development</li>
                    </ul>
                    <p class="font-avenir px-24 font-sm text-base tracking-mid leading-6">We are developing broad
                        collaborations with various stakeholders to investigate other
                        potential avenues of investigation and treatment.</p>

                    <h3 class="font-raleway font-thin text-xl mb-4 mt-10">3D PRINTING IN CLINICS</h3>
                    <p class="font-avenir px-24 font-sm text-base tracking-mid leading-6">We are interested in applying
                        3D
                        printing techniques in clinical contexts to create
                        realistic and anatomically precise 3D printed models generated from medical images for surgery
                        planning, training, and teaching applications. Together with other medical departments and
                        hospital
                        services, we have started a pioneer work to provide them with these complex and personalized 3D
                        realistic models that can potentially be used in their surgeries or teaching activities. BTELab
                        facilities include the most advanced technologies to create the models in different polymers and
                        resins, controlling not only colors and textures but also stiffness and elongation. Our
                        expertise in
                        medical image processing and digital model manipulation is essential to be capable of extracting
                        the
                        whole complexity and anatomical structure of the human organs and tissues from the medical
                        images.
                    </p>
                    <h3 class="font-raleway font-thin text-xl mb-4 mt-10">XR TECHNOLOGIES</h3>
                    <p class="font-avenir px-24 font-sm text-base tracking-mid leading-6">Our research is also dedicated
                        to creating extended reality (XR) environments for manipulating personalized patient anatomical
                        models, facilitating complex surgical planning and medical education. We're developing virtual
                        reality (VR) and augmented reality (AR) systems to enrich surgical teaching methods. Our current
                        focus is on integrating advanced haptic feedback through mixed reality (MR) phantoms, pushing
                        the boundaries of immersive medical training.
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col bg-black pt-28 pb-28" id="stem-cell">
            <div class="container mx-auto visible xl:hidden px-5 ">
                <div class="flex flex-col items-center justify-center bg-grey py-8">
                    <nuxt-img format="webp" class="object-contain" :src="stem1" alt="Stem 1" fetchpriority="low"
                        width="350" height="auto" blur-up quality="100" />

                    <nuxt-img format="webp" class="object-contain" :src="stem2" alt="Stem 2" fetchpriority="low"
                        width="200" height="auto" blur-up quality="100" />

                    <nuxt-img format="webp" class="object-contain" :src="stem3" alt="Stem 3" fetchpriority="low"
                        width="300" height="auto" blur-up quality="100" />

                </div>

                <div class="w-full bg-white px-20 py-32 text-center">
                    <h2 class="font-raleway font-thin lg:text-5xl md:text-4xl text-4xl mb-16">Stem cell biology and
                        Tissue
                        Engineering</h2>
                    <p class="font-avenir md:px-24 font-sm text-base tracking-mid leading-6">Stem cells can be
                        self-replicating and differentiate into different cell types
                        depending on their potency. Our group studies stem cell-based treatments and develop stem cell
                        delivery technologies with or without the help of scaffolds mimicking the properties of the
                        natural
                        niche. We use human multipotent adipose mesenchymal stem cells (hASCs) as a clinically relevant
                        source for tissue engineering but also as a model system for differentiation and signal
                        transduction. We prepare 3D in vitro platforms using hASCs, spheroids, and organoids. Research
                        activities include immunomodulation and wound healing. Creating models and substitutes using
                        engineering approaches and xeno-free cell derivatives, designing directed differentiation
                        protocols.
                        Our efforts are also looking to identify the factors central to mediated regulation of
                        angiogenesis,
                        fibrosis, immune modulation, and epigenetics. We have a library of hASCs from over 200 different
                        donors fully characterized and tested against pathogens, adventitious viruses, or zoonotic
                        agents.
                    </p>
                </div>
            </div>

            <div class="container hidden mx-auto xl:flex">
                <div class="w-1/3 bg-grey h-auto">
                    <div class="grid grid-cols-1 place-content-evently h-full py-16 md:py-8">
                        <div class="flex justify-center">
                            <nuxt-img format="webp" class="object-contain" :src="stem1" alt="Stem 1" fetchpriority="low"
                                width="350" height="auto" blur-up quality="100" />
                        </div>

                        <div class="flex justify-center">
                            <nuxt-img format="webp" class="object-contain" :src="stem2" alt="Stem 2" fetchpriority="low"
                                width="200" height="auto" blur-up quality="100" />
                        </div>

                        <div class="flex justify-center">
                            <nuxt-img format="webp" class="object-contain" :src="stem3" alt="Stem 3" fetchpriority="low"
                                width="300" height="auto" blur-up quality="100" />
                        </div>
                    </div>
                </div>

                <div class="w-2/3 bg-white px-20 py-32 text-center">
                    <h2 class="font-raleway font-thin lg:text-5xl md:text-4xl text-3xl mb-16">Stem cell biology and
                        Tissue
                        Engineering</h2>
                    <p class="font-avenir px-24 font-sm text-base tracking-mid leading-6">Stem cells can be
                        self-replicating
                        and differentiate into different cell types
                        depending on their potency. Our group studies stem cell-based treatments and develop stem cell
                        delivery technologies with or without the help of scaffolds mimicking the properties of the
                        natural
                        niche. We use human multipotent adipose mesenchymal stem cells (hASCs) as a clinically relevant
                        source for tissue engineering but also as a model system for differentiation and signal
                        transduction. We prepare 3D in vitro platforms using hASCs, spheroids, and organoids. Research
                        activities include immunomodulation and wound healing. Creating models and substitutes using
                        engineering approaches and xeno-free cell derivatives, designing directed differentiation
                        protocols.
                        Our efforts are also looking to identify the factors central to mediated regulation of
                        angiogenesis,
                        fibrosis, immune modulation, and epigenetics. We have a library of hASCs from over 200 different
                        donors fully characterized and tested against pathogens, adventitious viruses, or zoonotic
                        agents.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const micro1 = '/bte_lab_micro_1.png';
const micro2 = '/bte_lab_micro_2.png';
const manufacturing1 = '/bte_lab_manu_1.png';
const manufacturing2 = '/bte_lab_manu_2.png';
const manufacturing3 = '/bte_lab_manu_3.png';
const manufacturing4 = '/bte_lab_vrmr_1.png';
const stem1 = '/bte_lab_stem_1.png';
const stem2 = '/bte_lab_stem_2.png';
const stem3 = '/bte_lab_stem_3.png';

export default {
    name: "Research",
    components: {},
    data() {
        return {
            micro1,
            micro2,
            manufacturing1,
            manufacturing2,
            manufacturing3,
            manufacturing4,
            stem1,
            stem2,
            stem3,
        }
    }
};
</script>