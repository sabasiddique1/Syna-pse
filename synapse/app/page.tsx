// import Image from "next/image";
// import {redirect} from "next/navigation";
//
// export default function Home() {
//  redirect('/auth')
// }



import Link from 'next/link';
import HomePage from "@/app/homepage/page";

export default function Home() {
    return (
        <div>
            <HomePage/>
            {/*<h1>Welcome to the Application</h1>*/}
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><Link href="/homepage">Common Homepage</Link></li>*/}
            {/*        <li><Link href="/doctor">Doctor Portal</Link></li>*/}
            {/*        <li><Link href="/patient">Patient Portal</Link></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </div>
    );
}
