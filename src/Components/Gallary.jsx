import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

export default function Gallary() {
    const data = [
        {
          label: "Ahmedabad",
          value: "Ahmedabad",
          images: [
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/499325.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/217205.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/638353.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/955565.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/414928.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/174936.jpg",
            },
          ],
        },
        {
          label: "Begnlore",
          value: "Begnlore",
          images: [
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/434160.jpeg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/673227.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/933902.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/860687.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/860687.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/434160.jpeg",
            },
          ],
        },
        {
          label: "Delhi",
          value: "Delhi",
          images: [
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/226164.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/366412.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/979627.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/846687.jpg",
            },
            {
              imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            },
          ],
        },
        {
          label: "Indore",
          value: "Indore",
          images: [
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/667286.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/303642.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/988127.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/182365.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/667286.jpg",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
          ],
        },
        {
          label: "Jaipur",
          value: "Jaipur",
          images: [
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/161938.jpeg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/539350.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/191411.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/161938.jpeg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/40964.jpg",
            },
            {
              imageLink:
                "https://franchiseapply.com/admin/uploads/gallery/539350.jpg",
            },
          ],
        },
      ];

  return (
    <>
    <div className="text-center mt-14">
      <h1 className="font-bold text-2xl">GALLERY</h1>
    </div>
    <div className="lg:m-12 md:m-5 m-1 my-10">
      <Tabs value="html">
        <TabsHeader defaultChecked={true}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 lg:gap-7 gap-2 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index} className="">
                  <img
                    className="h-44 w-full max-w-full rounded-lg object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
    </>
  );
}
