import Script from "next/script";

const AdSense = ({ pId }) => {
    return (
        <Script 
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6105325142498306`}
            crossorigin="anonymous"
            strategy="afterInteractive"
        /> 
    )
}

export default AdSense