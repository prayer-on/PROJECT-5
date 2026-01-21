import Header from "../Components/header"
import Footer from "../Components/footer"
import DetailBanner from "../Components/detbanner"
import Location from "../Components/location"
import SmFilter from "../Components/smfilter"
import Host from "../Components/host"
import Button from "../Components/button"
import Star from "../Components/star"
import data from "../assets/property.json"
import { useParams } from 'react-router-dom';


function DetailPage() {

const {id} = useParams()
const property = data.find(item => item.id === id)
const allImages = [...new Set([property.cover, ...property.pictures])];


    return(
        <>
        <Header/>
        <section className="detail-section">
        <DetailBanner imageUrls={allImages}/>
        <div className="info-box">
        <div>
        <Location property={property} 
                  location={property.location}/>
        {property.tags.map((item, index) => <Button key={index} name={item}/>)}
        </div>
        <div className="user-rank-box">
        <Host host={property.host}/>
        <Star rating={property.rating}/>
        </div>
        </div>
        <div className="smfilter-box">
        <SmFilter title= "Description" content={property.description}/>
        <SmFilter title= "Amenities" content={property.equipments.map((item, index) =>
            <li key={index}>
            {item}
            </li>)}/>
        </div>
        </section>
        <Footer/>
        </>
        

    );
}

export default DetailPage