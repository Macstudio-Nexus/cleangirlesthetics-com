import Image from "next/image";
import smallImage from "@/public/lash_extension_SI.jpg";
import largeImage from "@/public/best_lashes_in_SI.jpg";
import ContactInfo from "./ContactInfo";

export default function Contact() {

    return (
        <section id="contact" className="w-full my-4">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center md:gap-2 xl:gap-10 lg:h-[500px] xl:h-[700px] 2xl:h-[700px] my-8">
                <div className="max-w-[400px] xl:max-w-[550px] h-[450px] xl:self-start grid mt-4">
                    <Image 
                        src={largeImage} 
                        alt="Best lash extensions in staten island" 
                        height={4480} 
                        width={6720} 
                        className="col-start-1 row-start-1 md:row-start-1 w-[75%] md:w-[75%] xl:w-[80%] h-auto self-center justify-self-end z-10 object-cover -mt-12 md:mt-0"
                    />
                    <Image
                        src={smallImage} 
                        alt="Best facials in staten island" 
                        height={4480} 
                        width={6720} 
                        className="col-start-1 row-start-1 z-20 w-[35%] self-start pt-15 justify-self-start md:justify-self-start"
                    />
                </div>
                <div className="lg:self-stretch">
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}