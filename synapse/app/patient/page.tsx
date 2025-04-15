// app/patient/page.js

import DoctorList from "@/app/patient/DoctorList/page";
import Slider from "@/components/Slider";

export default function PatientMain() {
    return (
        <>
            {/*<div>*/}
            {/*    <h1>Patient Portal</h1>*/}
            {/*    <p>Welcome, Patient!</p>*/}
            {/*</div>*/}

            <div>
                {/*<Slider/>*/}
                <DoctorList/>
            </div>
        </>
    );
}
