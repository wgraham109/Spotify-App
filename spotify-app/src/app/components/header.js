
export default function Header({loggedIn}){
    if (loggedIn){
        return (
            <div className="flex flex-row gap-5 bg-background_dark h-20 w-full items-center px-5 text-main_text">
                <button className="bg-highlight rounded-md py-1 px-3"> Home </button>
                <button className="bg-highlight rounded-md py-1 px-3"> Sign Out </button>
                <button className="bg-highlight rounded-md py-1 px-3"> Home </button>
            </div>
        );
    }
    return (
        <div className="flex flex-row gap-5 bg-background_dark h-20 w-full items-center px-5 text-main_text">
            <button className="bg-highlight rounded-md py-1 px-3"> Home </button>
            <button className="bg-highlight rounded-md py-1 px-3"> Home </button>
        </div>
    );
    
}