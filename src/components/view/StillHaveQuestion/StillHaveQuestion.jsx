import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/site";
import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link";

export default function StillHaveQuestion() {
    const {
        displayNumber, whatsappCallLink, numberCallLink
    } = SiteConfig;


    return (
        <div className="my-5 text-center">
            <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-[#1F2937] dark:to-[#111827] p-8 md:p-12 border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003053]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#B91C1C]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our expert team is ready to provide personalized answers to your specific queries.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={numberCallLink}>


                            <Button
                                className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
                                size="lg"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now {displayNumber}
                            </Button>
                        </Link>


                        <Link href={whatsappCallLink}>
                            <Button
                                variant="outline"
                                className="h-14 px-8 text-lg font-medium border-primary text-primary hover:bg-primary/90 hover:text-white dark:border-white dark:text-white dark:hover:bg-white/10"
                                size="lg"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Live Chat
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}