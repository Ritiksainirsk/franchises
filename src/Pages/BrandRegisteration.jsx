import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function BrandRegisteration() {
  return (
    <>
      <div className="my-5 lg:mx-32 border-2 p-5 py-11 px-16 rounded-xl bg-blue-gray-100">
        <div className="relative py-9">
          <p className="bg-black absolute top-5 rounded-2xl text-white px-4 font-bold tracking-wider w-[250px] py-2">
            START YOUR OWN BUSINESS
          </p>
          <div className="bg-black h-[1px] mb-[3px]"></div>
          <div className="bg-black h-[1px]"></div>
        </div>
        <div className="flex justify-center ">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Investor Registration
            </Typography>
            <form className="mt-8 mb-2 lg:w-[800px]">
              <div className="mb-1 flex flex-col gap-6">
                <div className="lg:flex items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Your Name :</p>
                  <input
                    size="lg"
                    placeholder="Your Name"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Last Name :</p>
                  <input
                    size="lg"
                    placeholder="Last Name"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Mobile :</p>
                  <input
                    size="lg"
                    placeholder="Mobile"
                    type="number"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Email :</p>
                  <input
                    size="lg"
                    type="email"
                    required
                    placeholder="Email"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Address :</p>
                  <input
                    size="lg"
                    type="text"
                    placeholder="Address"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">City :</p>
                  <input
                    size="lg"
                    type="text"
                    placeholder="City"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Country :</p>
                  <select name="" id=""  className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-gray-900">
                    <option value="india">India</option>
                    <option value="us">Us</option>
                  </select>
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Status :</p>
                  <select name="" id=""  className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-gray-900">
                    <option value="india">Rajsthan</option>
                    <option value="india">Up</option>
                    <option value="india">MP</option>
                    <option value="india">Hariyana</option>
                    <option value="india">Panjab</option>
                    <option value="india">Aandharpardesh</option>
                    <option value="india">Utra Khand</option>
                    <option value="india">Maharastra</option>
                    <option value="india">Delhi</option>
                    <option value="india">Chatisgarh</option>
                    <option value="india">Asam</option>
                    <option value="us">Jammu and Kashmir</option>
                  </select>
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-28 font-bold md:text-[1.1rem]">Pincode :</p>
                  <input
                    size="lg"
                    placeholder="Pincode"
                    type="number"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-64 font-bold md:text-[1.1rem]">
                    Select Available Capital :
                  </p>
                  <select name="" id=""  className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-gray-900">
                    <option value="india">Select Available Capital</option>
                    <option value="india">Rs. 10,000 - Rs. 50,000</option>
                    <option value="india">Rs. 50,000 - Rs. 2L</option>
                    <option value="india">Rs. 1L - Rs. 3L</option>
                    <option value="india">Rs. 3L - Rs. 10L</option>
                    <option value="india">Rs. 10L - Rs. 50L</option>
                    <option value="india">Rs. 50L - Rs. 1Cr</option>
                    <option value="india">Rs. 1Cr - Rs. 3Cr</option>
                    <option value="india">Rs. 3Cr - Rs. 5Cr</option>
                    <option value="india">Rs. 5Cr - Rs. 6Cr</option>
                  </select>
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-80 font-bold md:text-[1.1rem]">
                    Select Start-up Timeframe :
                  </p>
                  <select name="" id=""  className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-gray-900">
                    <option value="india">Select Start-up Timeframe</option>
                    <option value="india">Less-than 3 Months</option>
                    <option value="india">3 - 6 Months</option>
                    <option value="india">6 - 12 Months</option>
                  </select>
                </div>
                <div className="lg:flex  items-center">
                  <p className="w-52 font-bold md:text-[1.1rem]">
                    Start up Location :
                  </p>
                  <input
                    size="lg"
                    type="text"
                    placeholder="Start up Location"
                    className=" w-full p-2 border-2 px-3 rounded-md !border-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Yes, I want to subscribe for weekly Newsletter
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I/We have carefully read and agree to the terms and
                      conditions.
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
              </div>
              <Button className="mt-6" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
