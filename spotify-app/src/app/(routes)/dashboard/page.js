import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Dashboard(){
    return (
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
                <div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}