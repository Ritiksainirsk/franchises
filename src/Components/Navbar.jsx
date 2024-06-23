import React, { useEffect, useState } from "react";
// import { Button } from "@material-tailwind/react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BuySellingMenuItems = [
  {
    title: "Buy Existing Business",
  },
  {
    title: "Sell Existing Business",
  },
];

const OurServiceMenuItems = [
  {
    title: "Brand Franchise Business Model",
  },
  {
    title: "Franchise Consultancy",
  },
  {
    title: "Marketing & Lead Generation for Brands",
  },
  {
    title: "Commercial Property Registration",
  },
  {
    title: "Franchise Development Programme",
  },
];

const optionsCategory = [
  { category: "Select Category" },
  { category: "Automobiles" },
  { category: "Beauty and Salon" },
  { category: "Business Services" },
  { category: "Courier Logistics" },
  { category: "  Dealers and Distributors" },
  { category: "Health and Wellness" },
  { category: "Food and Beverage" },
  { category: "Retail" },
  { category: "Automobiles" },
  { category: "Beauty and Salon" },
  { category: "Business Services" },
  { category: "Business Services" },
  { category: "Business Services" },
];

const priceRange = [
  { Price: "Price Range" },
  { Price: "10,000 to 3 Lacs" },
  { Price: "3 lacs to 5 lacs" },
  { Price: "5 lacs to 10 lacs" },
  { Price: "10 lacs to 20 lacs" },
  { Price: "20 lacs to 50 lacs" },
  { Price: "More Than 50 lacs" },
  { Price: "10,000 to 3 Lacs" },
  { Price: "20 lacs to 50 lacs" },
  { Price: "10 lacs to 20 lacs" },
  { Price: "10,000 to 3 Lacs" },
  { Price: "10 lacs to 20 lacs" },
  { Price: "5 lacs to 10 lacs" },
];

function NavListMenu({ Title, data }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = data.map((item, key) => (
      <MenuItem className="text-black">
        <Link to={"/existingbusiness"}>
          <div>
            <Typography className="">{item.title}</Typography>
          </div>
        </Link>
      </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {Title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/"} smo>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>

      <NavListMenu
        Title={"Buy/ Sell Existing Business"}
        data={BuySellingMenuItems}
      />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"brand_registration"}>
          {" "}
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Register your Brand
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu Title={"Our Service"} data={OurServiceMenuItems} />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/blog"}>
          {" "}
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Blog
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"interviews"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Interview
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/videos"}>
          {" "}
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Videos
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/masterfranchise"}>
          {" "}
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Master Franchise
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function Navbarr() {
  const [openNav, setOpenNav] = React.useState(false);

  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 700; // Adjust this value as needed
      setIsFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Navbar
          className={`px-4 py-2 z-40 w-full border-none ${
            isFixed ? "fixed top-0 m-auto" : " "
          }`}
        >
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex">
              <Link to="/brand_registration">
                {" "}
                <Button variant="text" size="sm" color="blue-gray" className="">
                  Log In
                </Button>
              </Link>
              <Link to="/brand_registration">
                {" "}
                <Button variant="gradient" size="sm">
                  Register
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                Log In
              </Button>
              <Button variant="gradient" size="sm" fullWidth>
                Sign In
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>

      {/*  */}

      <div className="shadow-sm">
        <form className="md:flex items-center justify-around py-3 md:p-1">
          <div className="flex md:block justify-center">
            <p className="text-black">Become Our Channel Partner :</p>
            <button className="font-bold font-sans float-end pr-3 hover:pr-1 text-red-600 hover:text-black transition-all duration-500">
              Register Now
            </button>
          </div>

          <div className="row py-3 flex gap-4 justify-center flex-wrap">
            <div className="">
              <div className="">
                <select className="form-control select select-bordered w-full max-w-xs pt-2">
                  {optionsCategory.map((item, key) => {
                    return (
                      <>
                        <option value={item.category} className="">
                          {item.category}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-sm-5 nopadding">
              <div>
                <select className="form-control select select-bordered w-full max-w-xs pt-2">
                  {priceRange.map((item, key) => {
                    return (
                      <>
                        <option value={item.Price}>{item.Price}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn bg-black border-none text-white shadow-none text-[0.8rem] hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:bg-black w-28"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/*  */}

      {/*  */}
      <div className="flex justify-around py-3 flex-wrap gap-2">
        <Opportunities title={"Top franchise opportunity"} color={"#8caba8"} />
        <Opportunities title={"Top premium franchise"} color={"#a2798f"} />
        <Opportunities title={"Master Franchise "} color={"#6fd08c"} />
      </div>
      {/*  */}
    </>
  );
}

function Opportunities({ title, color }) {

  return (
    <>
      <div class="row">
        <div class="formainone flex flex-col text-center">
          <span className="text-black"> {title}</span>
          <strong className={`text-[${color}]`}>Opportunities</strong>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-black mt-3 py-2 text-white shadow-none text-[0.7rem] hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Explore All
          </Button>
        </div>
      </div>
    </>
  );
}

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="top-0 left-0 w-full z-50 bg-base-100 drop-shadow-xl">
//     <div className="flex items-center justify-between px-4 py-2">
//       <div className="lg:hidden" onClick={toggleMenu}>
//         {isOpen ? (
//           <IoIosClose className='cursor-pointer text-2xl'/>
//         ) : (
//           <IoMenu className=' cursor-pointer text-2xl'/>
//         )}
//       </div>
//       <nav className="hidden lg:flex space-x-4">
//         <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md">
//           Home
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md">
//           Buy/Sell Existing Business
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md">
//           Register Your Brand
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md">
//           Our Services
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md">
//           Blog
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-4 py-2 rounded-md">
//         Interviews
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px-4 py-2 rounded-md">
//         Videos
//         </a>
//         <a href="#" className="text-black hover:text-gray-300 px- py-2 rounded-md">
//         Master Franchise
//         </a>
//         <div className='pl-2 flex items-center gap-5 justify-end'>
//         <button className='btn btn-sm'>Login</button>
//         <button className='btn btn-sm'>Register</button>
//         </div>
//         {/* Add more menu items here */}
//       </nav>
//     </div>
//     {isOpen && (
//       <div className="lg:hidden absolute bg-base-100 w-full py-4 drop-shadow-xl">
//         <a
//           href="#"
//           className="text-black block px-4 py-2 hover:text-gray-300 rounded-md"
//         >
//           Home
//         </a>
//         <a
//           href="#"
//           className="text-black block px-4 py-2 hover:text-gray-300 rounded-md"
//         >
//           Buy/Sell Existing Business
//         </a>
//         <a
//           href="#"
//           className="text-black block px-4 py-2 hover:text-gray-300 rounded-md"
//         >
//           Register Your Brand
//         </a>
//         <a
//           href="#"
//           className="text-black block px-4 py-2 hover:text-gray-300 rounded-md"
//         >
//           Our Services
//         </a>
//         <a
//           href="#"
//           className="text-black block px-4 py-2 hover:text-gray-300 rounded-md"
//         >
//           Blog
//         </a>
//         <a href="#" className="text-black block px-4 py-2 hover:text-gray-300 rounded-md">
//         Interviews
//         </a>
//         <a href="#" className="text-black block px-4 py-2 hover:text-gray-300 rounded-md">
//         Videos
//         </a>
//         <a href="#" className="text-black block px-4 py-2 hover:text-gray-300 rounded-md">
//         Master Franchise
//         </a>
//         <div className='pl-4 pt-4 flex items-center gap-5'>
//         <button className='btn btn-sm'>Login</button>
//         <button className='btn btn-sm'>Register</button>
//         </div>
//         {/* Add more menu items here */}
//       </div>
//     )}
//   </div>
//   );
// }

// export default Navbar;

{
  /* */
}
