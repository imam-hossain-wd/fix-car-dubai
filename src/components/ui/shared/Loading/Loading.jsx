import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center items-center -mt-28 h-screen"><HashLoader
            color="#f59e0b"
            size={50}
        /></div>
    )
}
