import Header from "../Components/header";
import Footer from "../Components/footer";
import AbtBanner from "../Components/abtbanner";
import Filter from "../Components/filter";

function AboutPage() {
    return(
    <>
    <Header/>
    <section className="about-section">
    <AbtBanner/>
    <Filter title="Reliability"/>
    <Filter title="Respect"/>
    <Filter title="Service"/>
    <Filter title="Security"/>
    </section>
    <Footer/>
    </>
    );
}

export default AboutPage