import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import Hamburger from "../Hamburger/hamburger";
const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[150px] px-8">logo</div>
          <NavigationMenu className=" flex w-auto items-center justify-between py-6 lg:px-8">
            <NavigationMenuList className="hidden lg:flex">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about-us">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/features">Features</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact-us">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
