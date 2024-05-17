"use client";
import React, { ReactNode, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare,FaRegUser } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null | ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false);


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
        <div className="h-10 w-10 rounded-full border border-black flex text-black items-center justify-center mr-2  transition duration-300">
          <span className="text-lg font-bold"><PiPottedPlantFill /></span>
        </div>
      </div>
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item={<PiPottedPlantFill size={"20"} />} />
          </Link>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
         
            <MenuItem setActive={setActive} active={active} item="Pots">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pots/ceramic-pots">
                  Ceramic Pots
                </HoveredLink>
                <HoveredLink href="/pots/plastic-pots">
                  Plastic Pots
                </HoveredLink>
                <HoveredLink href="/pots/wooden-pots">Wodden Pots</HoveredLink>
                <HoveredLink href="/pots/hanging-pots">
                  Hanging Pots
                </HoveredLink>
              </div>
            </MenuItem>
        
        
            <MenuItem setActive={setActive} active={active} item="Plants">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/plant/indoor-plants">
                  Indoor Plant
                </HoveredLink>
                <HoveredLink href="/plant/flowering-plants">
                  Flowering Plants
                </HoveredLink>
                <HoveredLink href="/plant/fruit-plants">
                  Fruits Plants
                </HoveredLink>
                <HoveredLink href="/plant/vegetable-plants">
                  Vegetables Plants
                </HoveredLink>
              </div>
            </MenuItem>
      
          
            <MenuItem setActive={setActive} active={active} item="Seeds" >
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/seeds/indoor-seeds">
                  Indoor Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/flowering-seeds">
                  Flowering Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/fruit-seeds">
                  Fruits Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/vegetable-seeds">
                  Vegetables Seeds
                </HoveredLink>
              </div>
            </MenuItem>
       
          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href={"/register"}>
            <MenuItem setActive={setActive} active={active} item={<FaRegUser className="pt-1" size={"20"} />} />
          </Link>
        </Menu>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="pl-4 pt-3  hover:text-white focus:outline-none "
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
                stroke="black"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                stroke="black"
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

              <MenuItem setActive={setActive} active={active} item="Pots">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/pots/ceramic-pots">
                    Ceramic Pots
                  </HoveredLink>
                  <HoveredLink href="/pots/plastic-pots">
                    Plastic Pots
                  </HoveredLink>
                  <HoveredLink href="/pots/wooden-pots">
                    Wodden Pots
                  </HoveredLink>
                  <HoveredLink href="/pots/hanging-pots">
                    Hanging Pots
                  </HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Plants">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/plant/indoor-plants">
                  Indoor Plant{" "}
                </HoveredLink>
                <HoveredLink href="/plant/flowering-plants">
                  Flowering Plants
                </HoveredLink>
                <HoveredLink href="/plant/fruit-plants">
                  Fruits Plants
                </HoveredLink>
                <HoveredLink href="/plant/vegetable-plants">
                  Vegetables Plants
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Seeds" >
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/seeds/indoor-seeds">
                  Indoor Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/flowering-seeds">
                  Flowering Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/fruit-seeds">
                  Fruits Seeds
                </HoveredLink>
                <HoveredLink href="/seeds/vegetable-seeds">
                  Vegetables Seeds
                </HoveredLink>
              </div>
            </MenuItem>
          
          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href={"/register"}>
            <MenuItem setActive={setActive} active={active} item="Register" />
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
                    item={
                      <>
                        <FaGithubSquare size={20} />
                      </>
                    }
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
