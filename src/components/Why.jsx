import whyus from "./utils/whyus"
import WhyCard from "./WhyCard"

export default function Home() {
  return (
    <div className="  min-h-screen flex items-center  flex-col why-bg" id="why">
      <br />
      <br />
      <h5 className="text-[#FFFFFF]">Why BlockBond ? </h5>
      <br />
      <h1 className="text-[#FFFFFF] text-center font-bold text-4xl">
        A decentralized crowdfunding <br />
        platform , with User intuitive design.
      </h1>
      <br />
      <br />

      <div className=" grid grid-cols-1 md:grid-cols-3 m-10  gap-5   ">
        {whyus.map((whyus) => (
          <div key={whyus.id}>
            <WhyCard title={whyus.title} desc={whyus.desc} />
          </div>
        ))}
      </div>
    </div>
  )
}
