import { serviceProps } from "@/lib/type";

export default function ServiceCard({text, title} : serviceProps) {
    return (
        <div className="bg-sage w-[300px] h-fit p-3 flex flex-col items-center justify-center gap-6">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}