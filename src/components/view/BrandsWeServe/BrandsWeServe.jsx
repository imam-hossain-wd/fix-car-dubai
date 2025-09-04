"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brandsImages } from "@/utils/assets";
import Link from "next/link";

export default function BrandsWeService() {
    const [activeTab, setActiveTab] = useState("american");
    const [searchQuery, setSearchQuery] = useState("");

    const tabs = [
        { id: "american", label: "American Brands", brands: brandsImages.americanbrands },
        { id: "british", label: "British Brands", brands: brandsImages.britishbrands },
        { id: "japanese", label: "Japanese Brands", brands: brandsImages.japanesebrands },
        { id: "french", label: "French Brands", brands: brandsImages.frenchbrands },
        { id: "other", label: "Other Brands", brands: brandsImages.otherbrands },
    ];

    const allBrands = Object.values(tabs).flatMap(tab =>
        Object.entries(tab.brands).map(([name, logo]) => ({
            name,
            logo,
            category: tab.id
        }))
    );

    const filteredBrands = searchQuery
        ? allBrands.filter(brand =>
            brand.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : Object.entries(tabs.find(tab => tab.id === activeTab)?.brands || {}).map(([name, logo]) => ({ name, logo }));

    const clearSearch = () => setSearchQuery("");

    return (
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Brands We <span className="text-transparent bg-clip-text bg-primary">Service & Repair</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide expert service and repair for all major automotive brands
                    </p>
                </div>

                <div className="mb-7">
                    <Tabs defaultValue="american" value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <div className="container mx-auto">
                            <TabsList className="h-auto p-3 w-full md:w-[90%] mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-5 gap-2">
                                {tabs.map((tab) => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 border border-primary hover:shadow-md"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>


                        </div>
                    </Tabs>
                </div>



                {/* Brands Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-6">
                    {filteredBrands.length > 0 ? (
                        filteredBrands.map((brand, index) => (
                            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg  ">
                                <CardContent className=" h-16 flex flex-col items-center justify-center aspect-square">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500">No brands found matching your search.</p>
                        </div>
                    )}
                </div>

                <div className="text-center mt-8">
                    <Button size="lg" className="rounded-full gap-2" asChild>
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}