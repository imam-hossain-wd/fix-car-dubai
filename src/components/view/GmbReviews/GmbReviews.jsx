"use client"; // For App Router — allows client-side script execution

import React, { useEffect } from "react";

export default function GMBReviews() {
  useEffect(() => {
    // Ensure the script runs only on the client
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="elfsight-app-b4b32249-4e17-4bee-b555-eb5dd71a3698" />
      </div>
    </section>
  );
}
