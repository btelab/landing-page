<template>
    <div class="flex flex-col bg-white">
        <div class="flex flex-col container mx-auto pt-20 pb-20" v-if="selectedPage === 'PROJECTS'">
            <h1 class="w-full flex justify-center text-6xl pb-4 font-raleway">Projects</h1>
            <div class="flex flex-1 w-full justify-center ">
                <div class="title-line bg-black"></div>
            </div>
        </div>

        <div class="flex flex-1 container mx-auto pb-24" v-if="selectedPage === 'PROJECTS'">
            <div class="flex flex-1 w-full justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('REALISTIC')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="realistic-logo">
                            <!-- <span class="text-5xl font-raleway">REALISTIC</span> -->
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('AICO')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="aico-logo">
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('GENT')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="gent-logo">
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('GJIDI')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="gjidi-logo">
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('APOTI')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="apoti-logo">
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('UPHOT')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="nimuphot-logo">
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="handleClick('INVESTIGO')"
                            class="h-full w-full flex items-center justify-center text-center hover-logo" id="investigo-logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col container mx-auto pt-20 pb-20" v-if="selectedPage === 'PROJECTS'">
            <h1 class="w-full flex justify-center text-6xl pb-4 font-raleway">Awards</h1>
            <div class="flex flex-1 w-full justify-center ">
                <div class="title-line bg-black"></div>
            </div>
        </div>

        <div class="flex flex-1 container mx-auto pb-24" v-if="selectedPage === 'PROJECTS'">
            <div class="flex flex-1 w-full justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <div class="h-full w-full flex items-center justify-center text-center hover-logo" id="valbiocar-logo">
                        </div>
                    </div>
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <div class="h-full w-full flex items-center justify-center text-center hover-logo" id="bioevooc-logo">
                            <span class="text-5xl font-raleway">BIOEVOOC</span>
                        </div>
                    </div>
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <div class="h-full w-full flex items-center justify-center text-center hover-logo" id="banvirte-logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'REALISTIC'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">REALISTIC</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">The main focus of REALISTIC is the 3D processing and creation of realistic anatomical models and orthoses 
                    of complex geometry with novel polymeric materials. This is intended to enable personalized surgical planning and to reduce the side effects 
                    of treatments. In REALISTIC, the BTELab collaborates with an exceptional group of clinicians, the Technological Institute of Plastics (AIMPLAS), 
                    and the Valencian company leader in 3D technological solutions (IT3D) to present an integrative and transversal proposal that not only focuses 
                    on production but also validates the work done in clinical environments. REALISTIC aims to potentially establish its own integral pilot unit 
                    for the generation of surgical planning models and highly complex geometric prostheses, from which healthcare professionals from different 
                    specialties of the General Hospital, as well as from other services and collaborating hospitals, will benefit. For this purpose, high quality 
                    innovative materials synthesized and improved by AIMPLAS will be used, with the support and assistance of IT3D.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>

                <div class="flex flex-1 items-center justify-center">
                    <img src="~/assets/realistic_logo.webp" alt="Realistic" class="object-none object-center w-64" />
                </div>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_realistic.png" alt="Logos Realistic project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'AICO'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">AICO</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">The purpose of these grants is to promote the research activity of established R&D&I research groups 
                    that show growth potential to become reference groups.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_aico.png" alt="Logos AICO project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'GENT'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">PLAN GENT</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">Worldwide, 300 million patients with severe wounds, including deep burns and chronic wounds such as foot ulcers 
                    and pressure sores, undergo surgery annually. Unfortunately, this number will continue growing due to the increase of life expectancy and chronic 
                    diseases. Autografting, the transplantation of skin from the same patient, is the ‘gold standard’ treatment. But the lack of healthy donor sites 
                    in patients with extensive deep burns makes it necessary to use skin from cadaver or animals, which carries some risks of infection and rejection. 
                    Tissue-engineered (TE) skin has emerged as promising alternative to solve these problems. But, up to now, none TE skin substitute created with own 
                    patient cells can fully replicate an autograft and become a permanent skin replacement. The inability to vascularize always leads to the dislodgement 
                    of the transplant. The last decade has seen remarkable progress in the collective effort to bioengineer such networks by selfassembly of vascular 
                    cells within suitable biomaterial that leaded graft resorption and failure. Heterotypic interactions between ECs and MSCs/perivascular cells are 
                    crucial in functional vascular development and stability in vivo. In 2D culture, however, these two cells types are separated, and thus crosstalk 
                    between them. Restoring this heterotypic cellular interaction in vitro is required for establish a functional vasculature in in vitro systems. 
                    Additionally, whether and how signals from endothelial cells influence the fate-restricted characteristics of MSCs /perivascular cells during 
                    vascularization process remains unclear.We aim to tackle these problems with an innovative strategy called Xeno-SPATE to: (1) build autologous skin 
                    constructs with functional channels, (2) to enlighten the role of EVs as cell-cell communication mediators during dermal vascular development 
                    and discover the cargo molecules involved (3) to pre-vascularize the skin substitute.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_plangent.png" alt="Logos Plan Gent project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'GJIDI'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">GJIDI</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">Call of Order 3/2018 of the Regional Ministry of Education, Research, Culture and Sport, within the 
                    framework of the National Youth Guarantee System and co-financed by the European Social Fund and the Youth Employment Initiative, whose main 
                    objective is to improve the training and employability of R&D technical and management personnel. This grant seeks to strengthen research 
                    activities in public research centers, as well as to improve the performance of infrastructures, scientific-technical equipment, laboratories 
                    and other facilities or services of a general nature or of common use of the entity.<br><br> This funding offers the opportunity to hire qualified 
                    personnel in the field of R&D, thus contributing to increase human resources at the beneficiary entities. The contracts granted allow the 
                    incorporation of technical and management personnel, in order to promote research activities and improve the scientific and technological 
                    capacity of the institutions. In addition to favoring the employability of young people, this call has a special focus on the development of 
                    research projects and the optimization of facilities and services related to science and technology.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_gjidi.png" alt="Logos GJIDI project">
            </div>
        </div>


        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'APOTI'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">APOTI</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">The aim of the project is to analyze the biosafety of breast implants by comparing different types 
                    of prostheses (silicone gel-filled PIP implants, non-PIP silicone gel-filled breast implants and saline-filled implants). The inflammatory 
                    reaction that these materials may cause in the normal or capsular tissue surrounding the implant has been investigated. A detailed study of 
                    these areas at the molecular and microscopic level is sought and the results contrasted with a corresponding epidemiological analysis. The ultimate 
                    goal is to determine the inherent disadvantages of each type of implant and to discover the possible risks derived from the use of PIP prostheses.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_apoti.png" alt="Logos APOTI project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'UPHOT'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">NIM-UPHOT</h1>
                <p class="flex w-full pb-36 font-avenir pr-8 text-justify">Infertility is a pathological condition affecting one eighth of women and one tenth of men worldwide 
                    and accentuates the declining European birth rates. Assisted reproductive techniques (ART) have been developed to treat infertility, and in vitro 
                    fecundation (IVF) has become the golden treatment with the highest pregnancy rates. According to recent studies, there is a need for novel 
                    techniques to reach higher efficiency and better control of the in vitro conditions.<br><br>This project seeks to improve cell culture systems and 
                    incorporate novel non-invasive monitoring techniques for IVF. Our proposal explores the opportunities offered by ultrafast pulse laser beams to 
                    provide new solutions and enhance IVF's essential operations. The two main research lines presented are the following: (a) the development of new 
                    "lab-on-a-chip" culture systems based on microfluidic devices, and (b) the adaptation of different ultrafast laser characterization and detection 
                    techniques to non-invasive monitoring of biological samples such as culture media or embryos. This is an ambitious and applied project with the 
                    capacity to generate frontier knowledge, which is supported by the experience and capabilities of a multidisciplinary team that brings together 
                    physicists, biologists, and engineers. Developments from the project will produce a significant impact on both ultrafast lasers research by bringing 
                    new systems based on the fundamental concepts presented in recent years by the research team, and on the biomedical field with potential advances 
                    in the functionality of the routinary experimental techniques. </p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_nimuphot.png" alt="Logos NIM-UPHOT project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'INVESTIGO'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-16 pb-16 font-raleway">INVESTIGO</h1>
                <p class="flex w-full pb-36 font-avenir pr-4 text-justify">From the Department of Innovation, Universities, Science and Digital Society, funding has been obtained 
                    for a total of four contracts with the "Programa Investigo", which aims to hire young researchers, technologists and technical staff in the field 
                    of R+D+i (Research, Development and Innovation). The activities to be supported are focused on initiatives related to health, the ecological 
                    transition and green economy, covering thematic areas such as renewable energies, energy efficiency, water and waste treatment, and the agri-food 
                    industry. This call seeks to strengthen the capacity for research and technological development in various sectors, promoting the employability of 
                    young talents in activities related to R+D+i. Through the recruitment of qualified personnel, the aim is to promote the generation of knowledge, 
                    innovation and technology transfer in strategic areas for scientific, technological and socioeconomic progress.</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_investigo.png" alt="Logos INVESTIGO project">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Projects",
    components: {},
    data(){
        return {
            selectedPage: 'PROJECTS',
        }
    },
    methods:{
        select(event){
            event.stopPropagation();
            event.preventDefault();
        },
        handleClick(_selectedPage){
            this.selectedPage = _selectedPage;
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
        }
    }
};
</script>
<style>
.hover-logo{
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
/* .hover-logo:hover{
    background-color: rgba(107, 114, 128, 0.5);
} */
#realistic-logo{
    background-image: url(../../assets/01_Realistic.png);
}
#aico-logo{
    background-image: url(../../assets/02_AICO.png);
}
#gent-logo{
    background-image: url(../../assets/03_Plan-Gent.png);
}
#gjidi-logo{
    background-image: url(../../assets/04_GJIDI.png);
}
#apoti-logo{
    background-image: url(../../assets/05_Apoti.png);
}
#nimuphot-logo{
    background-image: url(../../assets/06_NIM-UPHOT.png);
}
#investigo-logo{
    background-image: url(../../assets/07_Investigo.png);
}
#valbiocar-logo{
    background-image: url(../../assets/09_Valbiocar.png);
}
#bioevooc-logo{
    background-image: none;
}
#banvirte-logo{
    background-image: url(../../assets/10_Banvirte.png);
}
</style>