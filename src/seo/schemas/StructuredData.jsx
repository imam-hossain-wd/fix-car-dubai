// components/StructuredData.tsx
export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // 1. ORGANIZATION SCHEMA (Brand Identity)
            {
                "@type": "Organization",
                "@id": "https://fixcardubai.com/#organization",
                "name": "Fix Car Dubai",
                "url": "https://fixcardubai.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.fixcardubai.com/logo.png" // Use your actual logo URL
                },
                "sameAs": [
                    "https://www.facebook.com/carrepairdxb",
                    "https://www.instagram.com/carrepairdxb/"
                ]
            },
            // 2. WEBSITE SCHEMA (Search & Domain Connection)
            {
                "@type": "WebSite",
                "@id": "https://fixcardubai.com/#website",
                "url": "https://fixcardubai.com/",
                "name": "Fix Car Dubai",
                "publisher": { "@id": "https://fixcardubai.com/#organization" },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://fixcardubai.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            // 3. LOCAL BUSINESS SCHEMA (Direct GBP Alignment)
            {
                "@type": "AutoRepair", // Highly specific category
                "@id": "https://fixcardubai.com/#localbusiness",
                "name": "Car Repair & Battery Replacement Service Dubai", // Matches GBP Name
                "parentOrganization": { "@id": "https://fixcardubai.com/#organization" },
                "url": "https://fixcardubai.com/",
                "telephone": "+971568703512",
                "priceRange": "$$",
                "image": "https://fixcardubai.com/hero-image.webp",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Karama",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 25.2485261,
                    "longitude": 55.3034075
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "00:00"
                    }
                ],
                // "areaServed": [
                //     { "@type": "City", "name": "Dubai" },
                //     { "@type": "Neighborhood", "name": "Al Satwa" },
                //     { "@type": "Neighborhood", "name": "Jumeirah" },
                //     { "@type": "Neighborhood", "name": "Al Bada'a" },
                //     { "@type": "Neighborhood", "name": "Al Jaddaf" },
                //     { "@type": "Neighborhood", "name": "Al Karama" },
                //     { "@type": "Neighborhood", "name": "Oud Metha" },
                //     { "@type": "Neighborhood", "name": "Al Mankhool" },
                //     { "@type": "Neighborhood", "name": "Al Jaffiliya" },
                //     { "@type": "Neighborhood", "name": "Downtown Dubai" }
                // ],
                "areaServed": [
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "AdministrativeArea", "name": "Al Karama" },
                    { "@type": "AdministrativeArea", "name": "Al Kifaf" },
                    { "@type": "AdministrativeArea", "name": "Umm Hurair Second" },
                    { "@type": "AdministrativeArea", "name": "Umm Hurair First" },
                    { "@type": "AdministrativeArea", "name": "Al Rigga" },
                    { "@type": "AdministrativeArea", "name": "Al Raffa" },
                    { "@type": "AdministrativeArea", "name": "Dubai Creek" },
                    { "@type": "AdministrativeArea", "name": "Al Jadaf" },
                    { "@type": "AdministrativeArea", "name": "Zaa'beel First" },
                    { "@type": "AdministrativeArea", "name": "Dubai Festival City" },
                    { "@type": "AdministrativeArea", "name": "Umm Ramool" },
                    { "@type": "AdministrativeArea", "name": "Al Garhoud" },
                    { "@type": "AdministrativeArea", "name": "Al Kheeran First" },
                    { "@type": "AdministrativeArea", "name": "Nadd Al Hamar" },
                    { "@type": "AdministrativeArea", "name": "Al Rashidiya" },
                    { "@type": "AdministrativeArea", "name": "Nadd Shamma" }
                ]
                ,
                "hasMap": "https://www.google.com/maps?cid=5322276743882070861", // Replace with your CID
                "sameAs": [
                    "https://www.facebook.com/carrepairdxb",
                    "https://www.instagram.com/carrepairdxb/"
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}