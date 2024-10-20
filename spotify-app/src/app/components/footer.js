import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex flex-row gap-5 bg-background_dark h-20 w-full items-center justify-center px-5 mt-auto text-main_text">
            <button className="bg-highlight rounded-md py-1 px-3"> 
                <Link href="../about"> About </Link>
            </button>
        </div>
    );
    
}