import React from "react";
import scss from "./footer.module.scss";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { footerNavs } from "@/constants/common";
import { link } from "fs";

const Footer = () => {
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <nav>
            {footerNavs.map((item,idx) => (
              <Link key={idx} href={item.link}>{item.name}</Link>
            ))}
          </nav>
          <p>
            EcoMovie - a unique website providing fascinating information about
            movies and TV shows. Here you can discover all the necessary details
            about your favorite films, actors, directors, ratings, and much
            more. EcoMovie boasts a stylish and intuitive interface that makes
            your search for cinematic masterpieces as convenient and enjoyable
            as possible.
          </p>
          <nav>
            <span>
              <FaDiscord />
            </span>

            <span>
              <FaInstagram />
            </span>
            <span>
              <FaVk />
            </span>
            <span>
              <IoLogoLinkedin />
            </span>
            <span>
              <FaGithubSquare />
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
