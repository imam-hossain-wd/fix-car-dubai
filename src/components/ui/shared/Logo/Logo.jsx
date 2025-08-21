import { bandlogo } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";




export default function Logo() {
    return (
        <Link href="/" className="flex flex-row items-center">
            {/* Always show the icon */}
            {/* <Image
                alt="24 Car Repair Dubai logo"
                width={40}
                height={40}
                src={bandlogo.carservice}
                className="h-10 w-10" // Fixed size for consistency
            /> */}
            
            {/* Show text only on md screens and up */}
            <div className="flex flex-col ml-2">
                <span className="text-xl font-bold text-primary leading-tight">24 CAR</span>
                <span className="text-xs font-bold text-primary leading-tight">REPAIR DUBAI</span>
            </div>
        </Link>
    )
}