import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAgreement=()=>{
    const axiosSecure= useAxiosSecure();
    const {user}= useContext(AuthContext);
    const {data:agreement=[]}= useQuery({
        queryKey:['agreement', user?.email],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/agreements?email=${user?.email}`);
            return res.data
        }
    })
    return [agreement]
}

export default useAgreement;