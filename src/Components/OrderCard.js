

const OrderCard = () => {
    return (
        <div className="container-card md:container md:mx-auto object-position: center;">
        <div class="card" style={{width: "20rem"}}>
        <img src="./Assets/images/illustration-hero.svg" alt="Order illustration" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title mt-4 heading">Order Summary</h5>
        <p class="card-text mt-4">You can now listen to millions of songs, audiobooks and podcast on any devide anywhere you like.</p>
        <div className="plan-section mb-2 mt-2">
            <img src="./Assets/images/icon-music.svg" alt="" />
            <h4>Anual plan</h4>
            <small>$59,99/year</small>
        </div>
        <div>
        <button class="btn btn-primary">Go somewhere</button>
        <h5>Cancel Order</h5>
        </div>
    </div>
</div>
</div>  
    )
}
export default OrderCard;
