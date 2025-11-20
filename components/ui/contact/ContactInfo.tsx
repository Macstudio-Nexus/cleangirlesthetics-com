import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {

    return (
        <div className="bg-sage h-fit w-full flex flex-col items-start justify-start gap-3 p-3 lg:p-6">
            <div>
                <h3>Let&apos;s Glow Together</h3>
            </div>
            <div className="flex items-center gap-5">
                <MapPin size={40}/>
                <p className="max-w-lg">Located in Princes Bay, Staten Island, NY. Serving customers in New York and New Jersey.</p>
            </div>
            <div className="flex items-center gap-5">
                <Phone size={25}/>
                <p>+1 (718)-514-5857</p>
            </div>
            <div className="flex items-center gap-5">
                <Mail size={25}/>
                <a className="font-outfit" href="mailto:info@cleangirlesthetics.com">info@cleangirlesthetics.com</a>
            </div>
            <div className="flex items-start gap-5">
                <Clock size={25}/>
                <div>
                <p className="font-bold">Hours</p>
                <p>Sunday: Closed</p>
                <p>Monday: 11am - 5pm</p>
                <p>Tuesday: 9am - 5pm</p>
                <p>Wednesday: 9am - 5pm</p>
                <p>Thursday: 9am - 5pm</p>
                <p>Friday: 8:30am - 5pm</p>
                <p>Saturday: 8:30am - 2pm</p>
                </div>
            </div>
        </div>
    )
}