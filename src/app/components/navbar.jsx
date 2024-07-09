"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { faPerson , faBagShopping , faPeopleGroup , faBlog , faContactCard , faGlobe} from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    title:"home",
    url:"/"
  },
  {
      title : "About",
      url : "/about",
      icon : faPerson,
      children : [
          {
              title : "Brand Profile",
              url : "",
          },
          {
              title : "Culture" ,
              url : ""
          },
          {
              title : "Certifications" ,
              url : ""
          }
      ]
  },
  {
      title : "Products",
      url : "/products",
      icon : faBagShopping,
      children : [
          {
              title : "Hotel Room Furniture",
              url : ""
          },
          {
              title : "Resturant Furniture" ,
              url : ""
          },
          {
              title : "Hotel Lobby Furniture" ,
              url : ""
          },
          {
              title : "Hotel Joinery Furniture" ,
              url : ""
          },
          {
              title : "Doors & Capenits" ,
              url : ""
          }
      ]
  },
  {
      title : "Clients",
      url : "/clients",
      icon : faPeopleGroup,
      children : [
          {
              title : "Hotel Cases",
              url : ""
          },
          {
              title : "Villa Cases",
              url : ""
          }
      ]
  },
  {
      title : "Global Case",
      url : "/globalcase",
      icon : faGlobe,
  },
  {
      title : "Blogs",
      url : "/blogs",
      icon : faBlog,
  },
  {
      title : "Contact Us",
      url : "/contact",
      icon : faContactCard,
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-md whitespace-nowrap ">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/2 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/2 xl:justify-end">
        <Link
          href="/"
          className=""
        >
          <img src="/logo.png" />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#EDEEFF] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#EDEEFF] rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#EDEEFF] rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-[#2C2C2E] text-[#EDEEFF] flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;