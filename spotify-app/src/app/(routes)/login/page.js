import Link from "next/link";

export default function Login(){
    return(
        <div className="min-h-screen w-full p-10"> 
            <main className="flex flex-col w-full justify-center">
                <div className="bg-white rounded-md mx-auto py-5">
                    <h1 className="text-black text-center text-xl font-semibold"> Log in to your account </h1>
                    <form className="space-y-5 bg-slate-200 px-5">
                        <div className="pt-3">
                            <label for="email" className="text-black"> Email </label> <br></br>
                            <input type="email" id="email" name="email" className="w-full bg-slate-400 border border-gray-700 rounded-sm text-center"/>
                        </div>
                        <div>
                            <label for="password" className="text-black"> Password</label> <br></br>
                            <input type="password" id="password" name="password" className="w-full bg-slate-400 border border-gray-700 rounded-sm text-center"/>
                        </div>
                        <div className="flex flex-row items-start"> 
                            <div className="flex items-center h-5 w-5"> 
                                <input type="checkbox" id="remember" name="remember"/>
                            </div>
                            <div className="flex items-center h-5"> 
                                <label for="remember" className="text-black"> Remember me </label>
                            </div>
                        </div>
                        <div className="pb-5"> 
                            <button type="submit" className="text-black bg-slate-300 rounded-lg w-full"> Submit </button>
                        </div>
                    </form>
                    <div className="flex flex-row gap-2 text-black px-3 mt-5">
                        <p> Don't have an account yet? </p>
                        <Link href="/signup" className="underline"> Sign up here </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}