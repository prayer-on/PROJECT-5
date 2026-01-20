function Location({property, location}) {
    return(
        <div className="wrapper-location">
            <div>{property.title}</div>
            <p>{location}</p>
        </div>
    );
}

export default Location