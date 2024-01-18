

const OrderCard = () => {
    return (
        <div className="container-card md:container md:mx-auto object-position: center;">
        <div classname="illustration ">
            <img src="./Assets/images/illustration-hero.svg" alt="Order illustration"/>
            <h2 className="heading">Order Summary </h2>
            <p className="text">You can now listen to millions of songs, audiobooks and podcast on any devide anywhere you like</p>
            <div className="plan-section">
                <div className=" price-plan">
                <div className="anual-plan">
                <img src="./Assets/images/icon-music.svg" alt="icon-music" className="icon"/>
                 <h4 className="anual"> Anual Plan</h4>
                 <h5 className="change">Change</h5>
                </div>
                <small>$19.90 / month</small>
                </div>
                <button className="payment mt-2 mb-2">Proceed to Payment</button>
                <p clasName="cancel-payment mt-2 mb-2"> Cancel Order</p>
            </div>
        </div>
        </div>
    )
}

export default OrderCard;
