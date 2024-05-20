import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";

export default function Interviews() {
  return (
    <div>
      <div className="text-center my-12">
        <h1 className="font-bold text-2xl">INTERVIEWS</h1>
      </div>
      <div>
        <Card1
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/452867.jpg"
          }
          name={"Mr. Ankur Kumar (Founder & MD ) - Pead In Pod"}
        />
        <Card2
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/537842.jpg"
          }
          name={"PULKIT VIRADIYA ( CEO & FOUNDER ) CANDY FLOSS"}
        />
        <Card1
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/102504.jpeg"
          }
          name={"Mr. Anil Bansal ( MD & Chairman ) - KOTTAIL INDIA PVT. LTD."}
        />
        <Card2
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/933915.jpeg"
          }
          name={
            "Mr Prasoon Pal ( CEO & Founder ) , Saurabh Mishra ( Director ) - TASKAR"
          }
        />
        <Card1
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/537809.jpg"
          }
          name={"VIKAS PUNJABI - MD ( THE CHOCOLATE ROOM )"}
        />
        <Card2
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/565642.jpg"
          }
          name={"SATISH KHUBANI - FOUNDER & CEO ( Havit Cycles )"}
        />
        <Card1
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/827295.jpg"
          }
          name={"Arun Kumawat - Founder and CEO ( DICEST Education Pvt Ltd )"}
        />
        <Card2
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/313408.jpg"
          }
          name={"Brijesh Patel - Founder & MD ( Care Pharmacy )"}
        />
        <Card1
          url={
            "https://www.franchiseapply.com/admin/uploads/interview_images/423931.jpg"
          }
          name={"Mr. Shiju Pappen - ( Founder & MD )"}
        />
      </div>
    </div>
  );
}

const Card1 = ({ url, name }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-4 items-start gap-3 border-2 my-10 mx-4 p-7 justify-center rounded-lg">
        <div className="md:w-44 md:h-44 w-36 h-36 md:col-span-1 md:mt-8 md:ml-5">
          <Avatar
            src={url}
            alt="avatar"
            size="xxl"
            className="object-top w-full h-full"
          />
        </div>

        <div className="md:col-span-3">
          <h2 className="font-bold">
            Q.1. Elaborate about the concept of Peas in pod?
          </h2>
          <p>
            The concept of the "Peas in Pod" centers on creating an exceptional
            learning environment that prioritizes the holistic development of
            each child. This preschool offers a blend of innovative and
            research- backed curriculum, fostering cognitive, social, emotional,
            and physical growth. It would feature experienced and nurturing
            educators who personalize learning experiences to suit individual
            needs, promoting curiosity, creativity, and critical thinking. Peas
            in Pod Preschool would prioritize safety, inclusivity, and
            diversity, creating a welcoming community for children and families.
            It would also leverage technology responsibly, enhance
            parent-teacher communication, and provide ongoing professional
            development for staff.
            {showMore && (
              <span>
                <h2 className="font-bold">
                  {" "}
                  Q. 2. What kind of business opportunity do you offers to the
                  potential entrepreneurs?
                </h2>
                As a franchisor of preschools, we offer a compelling business
                opportunity to potential entrepreneurs by providing
                comprehensive training in all aspects of preschool operations,
                ongoing support, and guidance. Our established brand recognition
                and marketing support help franchisees attract and retain
                students, while our scalable business model offers the potential
                for growth and expansion into new markets.
                <h2 className="font-bold">
                  {" "}
                  Q.3.What is the USP of Peas in pod?
                </h2>
                What are the benefits one can expect from your franchise? The
                Unique Selling Proposition (USP) of Peas in Pod is its
                innovative curriculum tailored to individual learning styles,
                interactive learning environments, highly qualified and caring
                educators, small class sizes for personalized attention, and a
                strong focus on social-emotional development. Benefits of owning
                a franchise could include established brand recognition, proven
                business systems, ongoing training and support, marketing
                assistance, and access to a network of experienced professionals
                and resources for continued growth and success.
                <h2 className="font-bold">
                  {" "}
                  Q.4.What point of time you thought of expanding via the
                  franchise route? Where do you see yourself in the next 5 year
                  period?
                </h2>
                I considered expanding via the franchise route when our
                preschool had achieved consistent success, established a strong
                brand reputation, and had a scalable business model. In the next
                5 years, I can envision myself as a well-established franchiser
                with a network of successful preschool franchises across
                different locations, contributing positively to early childhood
                education and making a significant impact in the industry.
                <h2 className="font-bold">
                  {" "}
                  Q. 5.Brief us about your entrepreneurial journey so far. Share
                  with us the company's profile?
                </h2>
                The entrepreneurial journey so far has been focused on creating
                a high-quality preschool brand known for its innovative
                curriculum, nurturing environment, and commitment to holistic
                child development. The company's profile includes a track record
                of successful preschool operations, a growing customer base,
                positive feedback from parents and educators, strategic
                partnerships with industry stakeholders, and a vision for
                nationwide expansion through franchising.
                <h2 className="font-bold">
                  {" "}
                  Q.6. What kind of training and support do you offers to your
                  franchisee?
                </h2>
                We provide extensive training covering curriculum delivery,
                staff management, marketing strategies, and operational best
                practices. We offer ongoing support through regular check-ins,
                mentoring sessions, and access to a network of experienced
                professionals. We also assist with site selection, facility
                setup, and regulatory compliance. Marketing support includes
                branding materials, digital marketing strategies, and local
                advertising campaigns. Continuous education programs keep
                franchisees updated on industry trends, new teaching
                methodologies, and business growth strategies.
                <h2 className="font-bold">
                  Q. 7. What are the challenges in this sector and how do you
                  overcome them?
                </h2>
                Challenges in the preschool sector include maintaining
                high-quality standards, managing regulatory compliance,
                addressing staff turnover, adapting to changing educational
                trends, and competing with other childcare options. These
                challenges can be overcome by implementing robust quality
                control measures, investing in continuous staff training and
                development, leveraging technology for efficient operations,
                building strong relationships with regulatory authorities, and
                differentiating your preschool through unique offerings and
                excellent customer service.
                <h2 className="font-bold">
                  Q. 8. What are the major growth drivers of your Brand?
                </h2>
                The major growth drivers of our Brand which significantly impact
                our company's success are: 1. Innovative Curriculum 2. Quality
                Assurance 3. Brand Recognition 4. Franchise Expansion 5.
                Technology Integration WELCOME To Peas In Pod Preschool &
                Daycare
              </span>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gray-400 block px-5 py-1 rounded-lg mt-3 text-black hover:bg-gray-500"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
            <h2 className="font-bold">{name}</h2>
          </p>
        </div>
      </div>
    </>
  );
};

const Card2 = ({ url, name }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="md:grid flex flex-col-reverse md:grid-cols-4 items-start gap-3 border-2 my-10 mx-4 md:p-7 p-4 justify-center rounded-lg">
        <div className="md:col-span-3">
          <h2 className="font-bold">
            Q.1. Elaborate about the concept of Peas in pod?
          </h2>
          <p>
            The concept of the "Peas in Pod" centers on creating an exceptional
            learning environment that prioritizes the holistic development of
            each child. This preschool offers a blend of innovative and
            research- backed curriculum, fostering cognitive, social, emotional,
            and physical growth. It would feature experienced and nurturing
            educators who personalize learning experiences to suit individual
            needs, promoting curiosity, creativity, and critical thinking. Peas
            in Pod Preschool would prioritize safety, inclusivity, and
            diversity, creating a welcoming community for children and families.
            It would also leverage technology responsibly, enhance
            parent-teacher communication, and provide ongoing professional
            development for staff.
            {showMore && (
              <span>
                <h2 className="font-bold">
                  {" "}
                  Q. 2. What kind of business opportunity do you offers to the
                  potential entrepreneurs?
                </h2>
                As a franchisor of preschools, we offer a compelling business
                opportunity to potential entrepreneurs by providing
                comprehensive training in all aspects of preschool operations,
                ongoing support, and guidance. Our established brand recognition
                and marketing support help franchisees attract and retain
                students, while our scalable business model offers the potential
                for growth and expansion into new markets.
                <h2 className="font-bold">
                  {" "}
                  Q.3.What is the USP of Peas in pod?
                </h2>
                What are the benefits one can expect from your franchise? The
                Unique Selling Proposition (USP) of Peas in Pod is its
                innovative curriculum tailored to individual learning styles,
                interactive learning environments, highly qualified and caring
                educators, small class sizes for personalized attention, and a
                strong focus on social-emotional development. Benefits of owning
                a franchise could include established brand recognition, proven
                business systems, ongoing training and support, marketing
                assistance, and access to a network of experienced professionals
                and resources for continued growth and success.
                <h2 className="font-bold">
                  {" "}
                  Q.4.What point of time you thought of expanding via the
                  franchise route? Where do you see yourself in the next 5 year
                  period?
                </h2>
                I considered expanding via the franchise route when our
                preschool had achieved consistent success, established a strong
                brand reputation, and had a scalable business model. In the next
                5 years, I can envision myself as a well-established franchiser
                with a network of successful preschool franchises across
                different locations, contributing positively to early childhood
                education and making a significant impact in the industry.
                <h2 className="font-bold">
                  {" "}
                  Q. 5.Brief us about your entrepreneurial journey so far. Share
                  with us the company's profile?
                </h2>
                The entrepreneurial journey so far has been focused on creating
                a high-quality preschool brand known for its innovative
                curriculum, nurturing environment, and commitment to holistic
                child development. The company's profile includes a track record
                of successful preschool operations, a growing customer base,
                positive feedback from parents and educators, strategic
                partnerships with industry stakeholders, and a vision for
                nationwide expansion through franchising.
                <h2 className="font-bold">
                  {" "}
                  Q.6. What kind of training and support do you offers to your
                  franchisee?
                </h2>
                We provide extensive training covering curriculum delivery,
                staff management, marketing strategies, and operational best
                practices. We offer ongoing support through regular check-ins,
                mentoring sessions, and access to a network of experienced
                professionals. We also assist with site selection, facility
                setup, and regulatory compliance. Marketing support includes
                branding materials, digital marketing strategies, and local
                advertising campaigns. Continuous education programs keep
                franchisees updated on industry trends, new teaching
                methodologies, and business growth strategies.
                <h2 className="font-bold">
                  Q. 7. What are the challenges in this sector and how do you
                  overcome them?
                </h2>
                Challenges in the preschool sector include maintaining
                high-quality standards, managing regulatory compliance,
                addressing staff turnover, adapting to changing educational
                trends, and competing with other childcare options. These
                challenges can be overcome by implementing robust quality
                control measures, investing in continuous staff training and
                development, leveraging technology for efficient operations,
                building strong relationships with regulatory authorities, and
                differentiating your preschool through unique offerings and
                excellent customer service.
                <h2 className="font-bold">
                  Q. 8. What are the major growth drivers of your Brand?
                </h2>
                The major growth drivers of our Brand which significantly impact
                our company's success are: 1. Innovative Curriculum 2. Quality
                Assurance 3. Brand Recognition 4. Franchise Expansion 5.
                Technology Integration WELCOME To Peas In Pod Preschool &
                Daycare
              </span>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gray-400 block px-5 py-1 rounded-lg mt-3 text-black hover:bg-gray-500"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
            <h2 className="font-bold">{name}</h2>
          </p>
        </div>

        <div className="md:w-44 md:h-44 w-36 h-36 md:col-span-1 md:mt-8 md:ml-5">
          <Avatar
            src={url}
            alt="avatar"
            size="xxl"
            className="object-top w-full h-full"
          />
        </div>
      </div>
    </>
  );
};
