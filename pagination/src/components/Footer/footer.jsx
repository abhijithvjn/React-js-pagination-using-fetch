import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container mx-auto px-6 py-10">
        <div className="flex w-auto items-center justify-between py-6 lg:px-8">

          {/* Navigation using shadcn NavigationMenu */}
          <NavigationMenu className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-800 uppercase">Quick Links</h3>
            <NavigationMenuList className="flex flex-col gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about-us" className="text-gray-600 hover:text-gray-900 transition">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/features" className="text-gray-600 hover:text-gray-900 transition">Features</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact-us" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">Follow Us</h3>
            <div className="mt-3 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
