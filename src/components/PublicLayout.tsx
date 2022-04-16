import { SignedIn, SignedOut, UserButton } from "@clerk/remix";
import React from "react";
import {Outlet} from '@remix-run/react';

const PublicPage: React.FC<{
  homeIcon?: React.ReactNode;
  pages?: string[];
}> = ({ pages = [], homeIcon = "Home" }) => {
  return (
    <div className="flex flex-col min-h-full">
      <div className="static bg-transparent shadow-xl">
        <div className="px-6 h-16 flex items-center">
          <a href={"/"} className="w-48 flex">
            {homeIcon}
          </a>
          <div className="justify-center flex-grow flex">
            {pages.map((p, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="border-l border-l-black border-opacity-50" />
                )}
                <h6 className="mx-2 text-xl">
                  <a
                    href={`/${p}`}
                    color="inherit"
                    className={
                      "hover:text-sky-400 hover:underline cursor-pointer"
                    }
                  >
                    {p}
                  </a>
                </h6>
              </React.Fragment>
            ))}
          </div>
          <div className="w-48 flex justify-end items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <a
                href={"/login"}
                className="mx-1 text-sky-400 border-sky-400 border rounded-md px-2 py-1 cursor-pointer hover:bg-sky-100 active:bg-sky-200"
              >
                LOGIN
              </a>
              <a
                href={"/signup"}
                className="mx-1 text-orange-400 border-orange-400 border rounded-md px-2 py-1 cursor-pointer hover:bg-orange-100 active:bg-orange-200"
              >
                SIGNUP
              </a>
            </SignedOut>
          </div>
        </div>
      </div>
      <main className="my-16 mx-auto flex justify-center max-w-3xl w-full p-0 flex-grow">
        <Outlet />
      </main>
      <footer className="px-6 py-4 m-t-auto bg-orange-400 bg-opacity-25">
        <hr className="border-gray-400"/>
        <div className="flex mt-4">
          <div className="w-1/3 text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} Vargas Arts, LLC</p>
          </div>
          <div className="w-2/3">
            <h6 className="text-xl font-bold mb-8">Site Links</h6>
            {["About", "Terms of Use", "Privacy Policy", "Contact"].map(
              (l, i) => (
                <p key={i}>
                  <a
                    href={`/${l.toLowerCase().replace(/ /g, "-")}`}
                    color="inherit"
                    className=" text-gray-400 text-xs"
                  >
                    {l}
                  </a>
                </p>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};