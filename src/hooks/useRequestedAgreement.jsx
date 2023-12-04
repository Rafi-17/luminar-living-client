import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useRequestedAgreement=()=>{
    const axiosSecure= useAxiosSecure();
    const {user}= useContext(AuthContext);
    const {data:requestedAgreement=[]}= useQuery({
        queryKey:['requestedAgreement', user?.email],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/requestedAgreements`);
            return res.data
        }
    })
    return [requestedAgreement]
}

export default useRequestedAgreement;