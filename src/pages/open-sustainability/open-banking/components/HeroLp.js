import React from "react"
import backImg from "../assets/heroImg.png"

const HeroLp = () => {
  return (
    <section className="my-16 container mx-auto py-0 justify-between items-center md:px-0 px-5">
      <div className="flex sm:flex-row flex-col px-0 md:px-3 lg:px-0 xl:px-3">
        <div className="sm:py-0 py-5">
          <h2 className="font-bold">Open Banking & Open Finance for Sustainability Trends Report</h2>
          <p className="">Learn how open economy APIs are enabling sustainability solutions</p>
        </div>
        <div>
          <img src={backImg} alt="" className=" " width="400" />
        </div>
      </div>
    </section>
  )
}

export default HeroLp
