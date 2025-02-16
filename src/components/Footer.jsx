import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [weight, setWeight] = useState(400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      const fontWeight = Math.min(
        900,
        Math.max(100, (mouseX / screenWidth) * 800 + 100)
      );
      setWeight(fontWeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-start md:justify-items-center">
        <div>
          <h3 className="subtitle-xl mb-3">Products</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/newarrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
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
        <p>{formattedTime}</p>
        <p>
          © {new Date().getFullYear()} Nike Remake By {""}
          <a
            href="https://github.com/oliverfelixdev/"
            style={{
              color: "#D1D5DB",
              fontFamily: "Ht",
              fontWeight: weight,
              transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            Oliver Felix
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
