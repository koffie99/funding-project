import Image from "next/image"
import features from "./utils/feature"

const Features = () => {
  const backgroundImage = "/images/feature-bg.png"
  
  return (
    <div 
      className="h-[100%] py-20 md:px-20 px-5" 
      id="features"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <section className="rounded-2xl p-8 h-[100%] feat-bg lg:mb-auto mb-[80px]">
        <div className="flex flex-col items-center mb-4">
          <p className="text-[#aaaaaa]">Our Features</p>
          <h2 className="features-title">What we offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-6">
              <Image
                src={feature.photo}
                alt={feature.title}
                width={50}
                height={50}
                className="feature-photo"
              />
              {/* <div className="flex flex-col">
                <h3 className="">{feature.title}</h3>
                <p className="n">
                  {feature.description}
                </p>
              </div> */}
              <div className="flex flex-col">
                <p className="font-bold text-lg">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Features
