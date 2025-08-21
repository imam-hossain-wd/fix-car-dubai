
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-row items-center">

            <div className="flex flex-col ml-2">
                <span className="text-2xl font-bold text-primary leading-tight italic">Fix Car</span>
                <span className="text-xs font-bold text-primary leading-tight italic">DUBAI</span>
            </div>
        </Link>
    )
}