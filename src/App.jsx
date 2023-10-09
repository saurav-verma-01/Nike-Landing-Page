// import React from "react";
import NavBar from "./components/NavBar";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
const App = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-1 wide:padding-r paddig-b">
        <Hero />
      </section>
      {/* <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />{" "}
      </section>
      <section className="padding">
        {" "}
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        {" "}
        <CustomerReviews />
      </section>
      <section className="padding padding-x sm:py-32 py-16 w-full">
        <Subscribe />{" "}
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section> */}
    </main>
  );
};

export default App;
