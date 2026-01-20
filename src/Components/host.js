function Host({host}) {
    return(
        <div className="user">
        <div>{host.name}</div>
        <img src = {host.picture}
             alt="picture of the host"/>
        </div>
        );
}

export default Host