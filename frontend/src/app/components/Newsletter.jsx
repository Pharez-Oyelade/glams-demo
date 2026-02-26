import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-glams-butter">
      <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-glams-charcoal">
              Join Our Newsletter
            </h2>
            <p className="font-poppins text-glams-charcoal/70 text-sm sm:text-base">
              Get the latest updates on new arrivals and exclusive offers
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-full px-4 py-2"
            />
            <button className="bg-glams-charcoal text-white rounded-full px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
