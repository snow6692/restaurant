import React from "react";
import MainHeading from "../MainHeading";
import Menu from "../menu/Menu";

interface IProps{
    
}
function BestSellers({}:IProps) {
  return (
    <section>
      <div className="container h-screen">
        <div className="mb-4 text-center">
          <MainHeading title="Checkout" subTitle="Our best sellers" />
        </div>
        <Menu />
      </div>
    </section>
  );
}

export default BestSellers;
