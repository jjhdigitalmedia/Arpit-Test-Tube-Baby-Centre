import { useState } from "react";
import { FaStethoscope, FaHeartbeat, FaCapsules } from "react-icons/fa";
import IuiTreatment from "./IuiTreatment";
import IvfEtTreatment from "./IvfEtTreatment";
import IcsiTreatment from "./IcsiTreatment";
import LaserAssistedTreatment from "./LaserAssistedTreatment";
import ImsiTreatment from "./ImsiTreatment";
import EmbryoDonation from "./EmbryoDonation";
import OocyteDonation from "./OocyteDonation";
import BlastocystTreatment from "./BlastocystTreatment";
import OocyteCryopreservation from "./OocyteCryopreservation";
import EmbryoBankTreatment from "./EmbryoBankTreatment";
import MESA from "./MESA";
import TESA from "./TESA";
import SemenCryopreservation from "./SemenCryopreservation";

import iui from "../../assets/icons/Treatment/iui.png";
import IVFet from "../../assets/icons/Treatment/IVFet.jpg";
import icsi from "../../assets/icons/Treatment/icsi.png";
import IMSI from "../../assets/icons/Treatment/IMSI.png";
import lasehatching from "../../assets/icons/Treatment/lasehatching.png";
import Blastocyst from "../../assets/icons/Treatment/Blastocyst.png";
import SemenCryo from "../../assets/icons/Treatment/SemenCryo.jpeg";
import OocyteDonationIcon from "../../assets/icons/Treatment/OocyteDonationIcon.jpg";
import ED from "../../assets/icons/Treatment/ED.png";

const treatmentsData = [
    {
        id: 1,
        icon: iui,
        title: "IUI",
        shortDescription: "Routine health checks and advice.",
        fullDescription:
            "During a general consultation, the doctor will perform a full assessment of your overall health, address any concerns, and suggest appropriate treatments or tests if needed.",
    },
    {
        id: 2,
        icon: IVFet,
        title: "IVF ET",
        shortDescription: "Heart health treatments and monitoring.",
        fullDescription:
            "Cardiac care involves detailed assessment, diagnosis, and management of heart-related conditions with personalized treatment plans.",
    },
    {
        id: 3,
        icon: icsi,
        title: "ICSI",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 4,
        icon: lasehatching,
        title: "Laser Assisted Hatching (LAH)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 5,
        icon: IMSI,
        title: "IMSI",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 6,
        icon: ED,
        title: "Embryo Donation (ED)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 7,
        icon: OocyteDonationIcon,
        title: "Oocyte Donation (OD)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 8,
        icon: Blastocyst,
        title: "Blastocyst Transfer",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 9,
        icon: SemenCryo,
        title: "Semen Cryopreservation",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 10,
        icon: <FaCapsules className="text-3xl text-green-500" />,
        title: "Oocyte Cryopreservation",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 11,
        icon: <FaCapsules className="text-3xl text-green-500" />,
        title: "Embryo Banking (Cryopreservation)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 12,
        icon: <FaCapsules className="text-3xl text-green-500" />,
        title: "MESA (Microsurgical Epididymal Sperm Aspiration)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
    {
        id: 13,
        icon: <FaCapsules className="text-3xl text-green-500" />,
        title: "TESA (Testicular Sperm Aspiration and Cryopreservation)",
        shortDescription: "Proper medication usage and review.",
        fullDescription:
            "Medication management ensures that patients are prescribed the correct drugs at proper dosages, minimizing side effects and maximizing effectiveness.",
    },
];
const TreatmentComponent = [
    {
        id: 1,
        title: "IUI",
        Comp: <IuiTreatment />,
    },
    {
        id: 2,
        title: "IVF ET",
        Comp: <IvfEtTreatment />,
    },
    {
        id: 3,
        title: "ICSI",
        Comp: <IcsiTreatment />,
    },
    {
        id: 4,
        title: "Laser Assisted Hatching (LAH)",
        Comp: <LaserAssistedTreatment />,
    },
    {
        id: 5,
        title: "IMSI",
        Comp: <ImsiTreatment />,
    },
    {
        id: 6,
        title: "Embryo Donation (ED)",
        Comp: <EmbryoDonation />,
    },
    {
        id: 7,
        title: "Oocyte Donation (OD)",
        Comp: <OocyteDonation />,
    },
    {
        id: 8,
        title: "Blastocyst Transfer",
        Comp: <BlastocystTreatment />,
    },
    {
        id: 9,
        title: "Semen Cryopreservation",
        Comp: <SemenCryopreservation />,
    },
    {
        id: 10,
        title: "Oocyte Cryopreservation",
        Comp: <OocyteCryopreservation />,
    },
    {
        id: 11,
        title: "Embryo Banking (Cryopreservation)",
        Comp: <EmbryoBankTreatment />,
    },
    {
        id: 12,
        title: "MESA (Microsurgical Epididymal Sperm Aspiration)",
        Comp: <MESA />,
    },
    {
        id: 13,
        title: "TESA (Testicular Sperm Aspiration and Cryopreservation)",
        Comp: <TESA />,
    },
];

function AllTreatments() {
    const [selectedTreatment, setSelectedTreatment] = useState(treatmentsData[0]);

    return (
        <div className="grid mx-auto bg-gray-100 grid-cols-1 flex-wrap-reverse md:grid-cols-3 gap-6 p-6 ">
            {/* Details Section
            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-4">{selectedTreatment.title}</h2>
                <p className="text-gray-700">{selectedTreatment.fullDescription}</p>
            </div> */}

            {TreatmentComponent.map((treatment) => (
                treatment.title === selectedTreatment.title ? (
                    <div
                        className="col-span-1 bg-white md:col-span-2 p-6 rounded-2xl">
                        {treatment.Comp}
                    </div>
                )
                    : null
            ))}

            {/* Treatments List Section */}
            <div className="p-1 rounded-2xl h-fit bg-white shadow-md space-y-4">
                {treatmentsData.map((treatment) => (
                    <div
                        key={treatment.id}
                        onClick={() => setSelectedTreatment(treatment)}
                        className={`flex items-start gap-4 p-4
                          hover:bg-rose-100 cursor-pointer rounded-xl transition-all  ${selectedTreatment.id === treatment.id ? 'bg-rose-100' : 'bg-'}`}
                    >
                        <img src={treatment.icon} className="w-14 rounded-md" alt="" />
                        {/* {treatment.icon} */}
                        <div>
                            <h3 className="text-xl font-semibold">{treatment.title}</h3>
                            <p className="text-gray-600 text-md">{treatment.shortDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AllTreatments;