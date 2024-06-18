import { Link } from "react-router-dom";

const HeroContact = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 py-6 px-4 mb-3 bg-[#f97729] text-white text-center text-[15px] md:flex-row md:space-y-0 md:space-x-8 lg:space-x-20">
      <div className="md:pr-4 md:border-r lg:pr-16">
        <p>
          <span className="font-bold">Uyo: </span> No. 12 Willam street(Amaecom Global House) After Nepa line by Aka road, Uyo
        </p>
        <p>
          <span className="font-bold">Port Harcourt: </span> No. 12 Rumola/Stadium Link Road, Port Harcourt
        </p>
      </div>
      <div className="md:pr-4 md:border-r lg:pr-16">
        <p>
          <span className="font-bold">Phone:</span>{" "}
          <Link to="tel:+2349071259643">+2349071259643</Link>
        </p>
        <p>
          <span className="font-bold">Optometrist:</span>{" "}
          <Link to="tel:+2347030729996">+2347030729996</Link>
        </p>
        <p>
          <span className="font-bold">Email:</span>{" "}
          <Link to="mailto:imageplusng@gmail.com">imageplusng@gmail.com</Link>
        </p>
      </div>
      <div>
        <p className="font-bold">Office Hours</p>
        <p>Monday - Saturday: 8AM - 5PM</p>
      </div>
    </div>
  );
};

export default HeroContact;
