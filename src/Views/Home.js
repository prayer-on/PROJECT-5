import Header from "../Components/header";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
import Card from "../Components/card";
import data from "../assets/property.json"

function HomePage() {
    return(
    <>
    <Header/>
    <section className="home-section">
    <Banner/>
    <div className="container-wrapper-card">
    {data.map(property => <Card key={property.id}
                                property={property}
                          />)}
    </div>
    </section>
    <Footer/>
    </>
    );
}

export default HomePage