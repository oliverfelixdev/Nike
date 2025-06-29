import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../utils/Context";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [products] = useContext(ProductContext);

  let categories = products
    ? [...new Set(products.map((products) => products.category))]
    : [];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const footerLinks = [
    {
      category: "Help",
      links: [
        "Customer Service",
        "Order Status",
        "Returns",
        "Shipping",
        "Payment Options",
      ],
    },
    {
      category: "Company",
      links: ["About Us", "Careers", "Sustainability", "Press"],
    },
    {
      category: "Follow Us",
      links: ["Facebook", "Twitter", "Instagram", "YouTube"],
    },
  ];

  return (
    <footer className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-start md:justify-items-center">
        <div>
          <h3 className="subtitle-xl mb-3">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400 capitalize">
            <li>
              <Link to="/underwork">New Arrivals</Link>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/shopall?category=${category}`}>{category}</Link>
              </li>
            ))}
            <li>
              <Link to="/jordan">Jordan</Link>
            </li>
          </ul>
        </div>
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="subtitle-xl mb-3">{section.category}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to="/underwork">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-zinc-800 mt-8 pt-5 flex justify-between text-gray-400 text-sm">
        <div className="flex items-center justify-start gap-10">
          <p>© {new Date().getFullYear()} Reimagine Nike</p>
        </div>
        <div>
          <p className="uppercase text-xs">
            Website by{" "}
            <a
              className="font-regular"
              target="_blank"
              href="https://www.linkedin.com/in/oliverfelixdev"
            >
              Oliver
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
