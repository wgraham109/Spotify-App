import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function About(){
    return(
        <div className="flex flex-col min-h-screen w-full bg-background_light gap-5">
            <Header/>
            <main>
                <div>
                    <p>
                        This is a truly sick app, by Walter Graham and Peter Bilski
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
}