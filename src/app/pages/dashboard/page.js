import { Suspense} from "react";
import Link from 'next/link'
import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    return (
        <div>
           
           <div className="geral">
        
            <div className="flex justify-center items-center w-100">
            </div>

            <div className="grid place-items-center gap-5 mb-24">

                <p>SOCORRO</p>
            </div>
            
        </div>
        </div>
    );
};