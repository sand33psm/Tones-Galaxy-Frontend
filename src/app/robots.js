import { userAgent } from "next/server";
import { NEXT_PUBLIC_BASE_URL } from "@/constants";

export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin"],
            }
        ], 
        sitemap: `${NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}