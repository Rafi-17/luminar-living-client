import { useEffect, useState } from "react";
import SeectionTitle from "../../../Components/SectionTitle/SeectionTitle";
import CouponCard from "./CouponCard";

const Coupon = () => {
    const [coupons, setCoupons]= useState([]);
    useEffect(()=>{
        fetch('coupon.json')
        .then(res=>res.json())
        .then(data=>setCoupons(data))
    },[])
    return (
        <div className="my-24">
            <SeectionTitle heading={'Coupons'}></SeectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-0">
                {
                    
                    coupons.map(coupon=><CouponCard key={coupon.id} coupon={coupon}></CouponCard>)
                }
            </div>
        </div>
    );
};

export default Coupon;