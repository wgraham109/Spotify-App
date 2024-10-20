import Link from "next/link";

export default function Header({loggedIn}){
    if (loggedIn){
        return (
            <div className="flex flex-row gap-5 bg-background_dark h-20 w-full justify-between items-center px-5 text-main_text font-semibold">
                <button className="bg-highlight rounded-md py-1 px-3"> 
                    <Link href="/dashboard"> Home </Link>
                </button>
                <button className="bg-highlight rounded-md py-1 px-3 justify-self-end"> Sign Out </button>
            </div>
        );
    }
    return (
        <div className="flex flex-row gap-5 bg-background_dark h-20 w-full justify-between items-center px-5 text-main_text font-semibold">
            <button className="bg-highlight rounded-md py-1 px-3"> 
                <Link href="./"> Home </Link>
            </button>
        </div>
    );
    
}