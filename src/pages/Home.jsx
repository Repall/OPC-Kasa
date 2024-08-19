import Footer from "../components/Footer"
import Header from "../components/Header"

function Home() {
    return (
        <>
            <Header />
            <div className="  relative p-5">
                <img className="h-20 opacity-60 bg-black border-solid rounded-2xl" src="/public/img/Image source 1.png" alt="Image Background" />
                <p className="absolute">Chez vous, partout et ailleurs</p>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Home;
