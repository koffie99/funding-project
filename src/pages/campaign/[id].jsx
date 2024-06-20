import DonorNav from "@/components/DonorNav"
import Footer from "@/components/Footer"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { Button, Progress } from "@nextui-org/react"

const CampaignDetails = () => {
  const router = useRouter()
  const { id, title, desc } = router.query

  // Fetch additional campaign details using the id if needed
  // This is just an example. Replace it with your actual data fetching logic.
  const campaign = {
    id,
    title,
    desc,
    details: "Detailed information about the campaign.",
  }

  return (
    <div className="bg-[#f9fafd] min-h-screen">
      <DonorNav />
      <div className="p-10">
        <div className="flex gap-8">
          <Image
            width={400}
            height={400}
            src="/images/volunteer.jpg"
            alt="heroman"
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">{campaign.title}</h2>
            <p>{campaign.desc}</p>
            <h3 className="mt-8">$100,000</h3>
            <Progress aria-label="Loading..." value={60} className="max-w-md w-[50px]"/>
            <input type="range" maxLength={50}/>
            <button className="bg-[#3CB371] text-white w-fit p-2 px-7 border-none mt-5 rounded">Donate</button>
          </div>
        </div>

        <div className="my-12">
          <p>
            Our Story Tim, a vibrant 25-year-old and our beloved son, is facing
            a critical battle for his life. He has been diagnosed with a severe
            case of Hypertrophic Cardiomyopathy (HCM), a condition that thickens
            the heart muscle and makes it difficult for the heart to pump blood
            efficiently. This surgery, called a Septal Myectomy, is the only
            chance Tim has for a full recovery and a return to his normal life
            as a talented musician. Unfortunately, the cost of the surgery is a
            staggering $150,000 – a burden our family simply cannot bear alone. <br /> <br />
            Why We Need Your Help Time is of the essence for Tim's surgery.
            Doctors recommend the procedure within the next 3 months to avoid
            potential complications. The sooner we can raise the necessary
            funds, the sooner he can receive the treatment he needs and get back
            to playing his beloved guitar. <br /><br /> We are reaching out to the kindness
            of strangers, friends, and family to help us bridge this financial
            gap. How Donations Will Be Used All funds raised through this
            campaign will go directly towards covering the cost of Tim's heart
            surgery, including: Surgical fees: $100,000 Hospital stay: $30,000
            Anesthesia: $10,000 Post-operative care: $5,000 Medications: $5,000
            Any funds exceeding the goal will be used for Tim's ongoing physical
            therapy and any unforeseen medical expenses during his recovery
            process. Transparency and Accountability We understand the
            importance of transparency with your donations. We will provide
            regular updates on Tim's condition on this campaign page, including
            photos and videos. We will also share detailed breakdowns of how the
            donated funds are being used, with receipts and invoices uploaded
            for your reference. A Heartfelt Plea Tim is a kind, compassionate,
            and incredibly talented musician who brings so much joy to the lives
            of those around him. He deserves a chance to fight for his future
            and continue sharing his music with the world. Please consider
            donating, no matter how big or small. <br /><br /> Every contribution brings us
            closer to our goal and gives Tim another chance at life. Together,
            we can make a difference! In addition to the above, you can also
            include: A high-quality photo of Tim smiling (with permission) A
            short video message from Tim expressing his gratitude and love for
            music (optional) Links to Tim's social media pages (with permission)
            A heartfelt message of gratitude for any amount donated Please note:
            This is a dummy campaign description and you may need to modify it
            based on Tim's specific situation and the crowdfunding platform's
            guidelines.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CampaignDetails
