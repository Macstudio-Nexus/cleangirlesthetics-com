import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-sage h-fit lg:h-full w-full flex flex-col items-start justify-between gap-3 p-3 lg:p-6 lg:pb-30">
      <h3>Let&apos;s Glow Together</h3>
      <div className="flex items-center gap-5">
        <MapPin className="size-6 shrink-0 lg:size-8" />
        <p className="max-w-md lg:max-w-lg leading-tight">
          Located in Princes Bay, Staten Island, NY. Serving customers in New
          York and New Jersey.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Phone className="size-6 lg:size-8 " />
        <a className="hover:text-white" href="tel:+17185145857">
          <p>+1 (718)-514-5857</p>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <Mail className="size-6 lg:size-8" />
        <a
          className="font-outfit hover:text-white"
          href="mailto:info@cleangirlesthetics.com"
        >
          <p>info@cleangirlesthetics.com </p>
        </a>
      </div>
      <div className="flex items-start gap-5">
        <Clock className="size-6 lg:size-8" />
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
  );
}
