import React from "react";
import Section from "./common/Section";
import avatar from "../assets/avatar.png";
const Testimonial = () => {
  const TESTIMONIAL = [
    {
      id: 1,
      image: avatar,
      name: "Jame",
      comment:
        "Something ebony from this pallas raven such nights, marvelled i fowl rare this i said, tinkled soul door sir nodded.",
    },
    {
      id: 2,
      image: avatar,
      name: "Minn Ho",
      comment:
        "Something ebony from this pallas raven such nights, marvelled i fowl rare this i said, tinkled soul door sir nodded.",
    },
    {
      id: 3,
      image: avatar,
      name: "Leo Rfa",
      comment:
        "Something ebony from this pallas raven such nights, marvelled i fowl rare this i said, tinkled soul door sir nodded.",
    },
  ];
  return (
    <Section
      title="Testimonial 💬"
      subtitle="This is what you others clients have to say about me. I accept clients from all around the world."
    >
      <div className="max-w-xl flex flex-col gap-8">
        {TESTIMONIAL.map(({ id, image, name, comment }) => (
          <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img src={image} alt={name} className="w-20 h-20 object-cover  object-top pt-2" />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h2 className="text-xl font-semibold">{name}</h2>
              <h2 className="text-sm font-extralight">{comment}</h2>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonial;
