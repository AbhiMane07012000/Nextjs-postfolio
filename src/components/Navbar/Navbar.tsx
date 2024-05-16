"use client";
import React, { ReactNode, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null |ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false);

  const LinkedInIcon = () => <FaLinkedin className="pt-[2px]" size={20} />;

  const GithubIcon = () => <FaGithubSquare className="pt-[2px]" size={20} />;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "fixed md:top-8 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      
      <div className=" absolute right-5 md:hidden pt-2  text-center ">
        <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center mr-2 hover:bg-white hover:text-gray-800 transition duration-300">
          <span className="text-lg font-bold">AM</span>
        </div>
      </div>
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="AM" />
          </Link>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href={"/education"}>
            <MenuItem setActive={setActive} active={active} item="Education" />
          </Link>
          <Link href={"/skills"}>
            <MenuItem setActive={setActive} active={active} item="Skills" />
          </Link>
          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="Aboutme" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Social links">
            <div className="flex flex-col space-y-6 p-6 ">
              <HoveredLink href="https://www.linkedin.com/in/abhijeet-mane-07012000/">
                <div className="flex flex-row">
                  <FaLinkedin size={20} />
                  <p className="pl-2">Linkedin</p>
                </div>
              </HoveredLink>
              <HoveredLink href="https://github.com/AbhiMane07012000/">
                <div className="flex flex-row">
                  <FaGithubSquare size={20} />
                  <p className="pl-2">Github</p>
                </div>
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-300 pl-4 pt-3  hover:text-white focus:outline-none "
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col">
            <Menu setActive={setActive}>
              <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home" />
              </Link>
              <Link href={"/education"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Education"
                />
              </Link>
              <Link href={"/skills"}>
                <MenuItem setActive={setActive} active={active} item="Skills" />
              </Link>
              <Link href={"/about"}>
                <MenuItem setActive={setActive} active={active} item="About " />
              </Link>
              <div className="flex flex-row">
                <Link
                  className="pr-5"
                  href={"https://www.linkedin.com/in/abhijeet-mane-07012000/"}
                >
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item={
                      <>
                        <FaLinkedin size={20} />
                      </>
                    }
                  />
                </Link>
                <Link href={"https://github.com/AbhiMane07012000/"}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item={ <>
                      <FaGithubSquare size={20} />
                    </>}
                  />
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
