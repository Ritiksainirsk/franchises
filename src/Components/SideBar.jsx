import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";

const ourFranchises = [
  { franchise: "Automobiles" },
  { franchise: "Beauty and Salon" },
  { franchise: "Business Services" },
  { franchise: "Dealers and Distributors" },
  { franchise: "Education" },
  { franchise: "Health and Wellness" },
  { franchise: "Food and Beverage" },
  { franchise: "Retail" },
  { franchise: "Courier Logistics" },
];

export default function SideBar() {
  return (
    <div>
      <div className=" p-5 px-11 md:flex gap-5">
        <div className="drawer lg:drawer-open lg:h-[350px] z-50 w-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <IoMenu className="text-2xl p-0"/>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu h-[100%] lg:h-auto p-4 w-80  bg-[#ffe9d0a0] text-base-content">
              {/* Sidebar content here */}
              {ourFranchises.map((franchise) => {
                return (
                  <>
                    <li>
                      <a style={{textDecoration:"none"}}>{franchise.franchise}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#cee9ea9c] h-36 md:h-80 w-full px-3 md:px-6 rounded-2xl mt-5">
        <CarouselCustomArrows/>
        </div>
      </div>
      
    </div>
  );
}


function CarouselCustomArrows() {
    return (
      <Carousel
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        navigation={false}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1694768222_3.jpg"
          alt="image 1"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1694768190_3.jpg"
          alt="image 2"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1695878617_3.jpg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1706516630_3.jpeg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
         <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1629086047_3.png"
          alt="image 3"
          className="h-full w-full object-contain"
        />
         <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1706865403_3.jpg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
         <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1707302519_3.jpg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1707814290_3.jpeg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1708679831_3.jpg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
        <img
          src="https://www.franchiseapply.com/admin/uploads/brand_registration/1709350964_3.jpg"
          alt="image 3"
          className="h-full w-full object-contain"
        />
      </Carousel>
    );
  }





//   <div class="carousel-inner" role="listbox">
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/beauty-and-salon/j-salon-best-salon-franchise"><img src="admin/uploads/brand_registration/1694768222_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/beauty-and-salon/juice-salon-franchise-business"><img src="admin/uploads/brand_registration/1694768190_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/yellow-heart-mustart-oil-franchise"><img src="admin/uploads/brand_registration/1695878617_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/business-services
// /think-quotient-franchise-opportunity"><img src="admin/uploads/brand_registration/1706516630_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/business-services
// /inxpress-logistics-consultants-franchise-opportunity-top-franchise-opportunity-best-business-opportunity"><img src="admin/uploads/brand_registration/1629086047_3.png" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /restrosol-food-outlet-consulting-brand"><img src="admin/uploads/brand_registration/1706865403_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/clog-london-franchise-premium-footwear-franchise"><img src="admin/uploads/brand_registration/1707302519_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/alfen-systems-private-limited-franchise"><img src="admin/uploads/brand_registration/1707814290_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/kottail-clothing-retail-franchise-business"><img src="admin/uploads/brand_registration/1708679831_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/montagneponnif-clothing-franchise-brand-business-opportunity"><img src="admin/uploads/brand_registration/1709350964_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/dealers-and-distributors
// /ricore-ofc-lan-cable-business-opportunity"><img src="admin/uploads/brand_registration/1710312706_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /welcome36-fastfood-cafe-franchise"><img src="admin/uploads/brand_registration/1710998957_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/automobiles
// /speedforce-multibrand-two-wheeler-service-franchise"><img src="admin/uploads/brand_registration/1686285005_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail
// /denzfox-menswear-franchise-business-opportunity"><img src="admin/uploads/brand_registration/1684903880_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/candy-floss-stores-franchise-business"><img src="admin/uploads/brand_registration/1704346020_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/beauty-and-salon/shades-salon-franchise-business-opportunity"><img src="admin/uploads/brand_registration/1708333108_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/business-services
// /63sats-cyber-security-franchise"><img src="admin/uploads/brand_registration/1710751934_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /shrishti-international-school-franchise"><img src="admin/uploads/brand_registration/1715318136_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/automobiles
// /voc-two-wheeler-service-center-franchise"><img src="admin/uploads/brand_registration/1715677477_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/kisna-jewellery-franchise-opportunity-franchise-apply"><img src="admin/uploads/brand_registration/1658493838_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item active">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /mechatron-robotics-franchise-opportunity-top-franchise-opportunity-best-business-opportunity"><img src="admin/uploads/brand_registration/1667361648_3.png" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/health-and-wellness
// /birla-ayurveda-health-wellness-clinic-centre-franchise"><img src="admin/uploads/brand_registration/1698214225_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /dicestcomputer-computer-training-franchise"><img src="admin/uploads/brand_registration/1702530646_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /momo-nation-cafe-momo-franchise-brand"><img src="admin/uploads/brand_registration/1704524928_3.png" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /epanipuricart-franchise"><img src="admin/uploads/brand_registration/1706762743_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /g-pizzeria-franchise-business"><img src="admin/uploads/brand_registration/1710389226_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/zeropayy-clothing-retail-franchise"><img src="admin/uploads/brand_registration/1713338313_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /tansen-sangeet-mahavidalaya-franchise"><img src="admin/uploads/brand_registration/1697089625_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /famish-cafe-dessert-franchise"><img src="admin/uploads/brand_registration/1710390126_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/abora-decor-retail-franchise"><img src="admin/uploads/brand_registration/1714561600_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/food-and-beverage
// /city-samosa-fast-food-franchise"><img src="admin/uploads/brand_registration/1713338449_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/retail/magson-gourmet-frozen-food-retails-franchise-brand"><img src="admin/uploads/brand_registration/1707979895_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /modern-montessori-franchise"><img src="admin/uploads/brand_registration/1701320743_3.jpeg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /tyb10x-education-franchise"><img src="admin/uploads/brand_registration/1714540700_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                     <div class="item">
//                                         <!--<a href="franchise-detail-v2.php?branddid=&catid="><img src="admin/uploads/brand_registration/" alt="..." style="height:250px;width:800px"></a>      -->
//                                         <a href="/education
// /explorra-premier-design-technology-based-tech-company"><img src="admin/uploads/brand_registration/1707302638_3.jpg" alt="..." style="height:250px;width:800px"></a>
//                                     </div>
//                                                                 <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
//                                     <span class="fa fa-chevron-left" aria-hidden="true"></span>
//                                     <span class="sr-only">Previous</span>
//                                 </a>
//                                 <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
//                                     <span class="fa fa-chevron-right" aria-hidden="true"></span>
//                                     <span class="sr-only">Next</span>
//                                 </a>
//                             </div>