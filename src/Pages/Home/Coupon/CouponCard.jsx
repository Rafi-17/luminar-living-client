
const CouponCard = ({coupon}) => {
    const {coupon_name, coupon_code}= coupon;
    return (
        <div>
            <div className="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{coupon_name}</h2>
                    <p className="text-lg font-bold">Coupon Code: <span className="text-purple-600 text-xl font-extrabold">{coupon_code}</span></p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-green-600 px-12 text-white text-lg border-0 hover:text-yellow-400 hover:bg-black">Use</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;