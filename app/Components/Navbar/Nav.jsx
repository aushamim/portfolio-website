"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [posTop, setPosTop] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setPosTop(window.scrollY);

      if (window.scrollY > 5) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  const scrollTo = (id) => {
    if (pathname != "/") {
      if (!id) {
        router.push("/");
      } else {
        router.push(`/#${id}`);
      }
    }
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <>
      <div
        className={`sticky top-0 left-0 right-0 duration-300 px-5 xl:px-20 bg-white backdrop-blur z-50 ${
          scrollToTopVisible ? "h-14" : "h-20"
        } ${
          pathname == "/" && posTop < 5
            ? "bg-opacity-0 shadow-none"
            : "bg-opacity-90 shadow-sm"
        }`}
      >
        <div className="h-full flex items-center">
          <div className="flex-grow">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                height={48}
                width={48}
              />
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-5">
            <button
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              onClick={() => {
                scrollTo();
              }}
            >
              Home
            </button>
            <button
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              onClick={() => {
                scrollTo("skills");
              }}
            >
              Skills
            </button>
            <button
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              onClick={() => {
                scrollTo("projects");
              }}
            >
              Projects
            </button>
            <button
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              onClick={() => {
                scrollTo("contact");
              }}
            >
              Contact
            </button>
            <a
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              href="https://drive.google.com/uc?export=download&id=1WeY-amg4wy5TNnBEZaamjDSDSchCNO0P"
            >
              Resume
            </a>
          </div>

          <div className="drawer drawer-end block xl:hidden z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-end">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-white text-base-content z-50">
                {/* Sidebar content here */}
                <li>
                  <button
                    className="font-medium hover:text-purple-500 duration-300"
                    onClick={() => {
                      scrollTo();
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="font-medium hover:text-purple-500 duration-300"
                    onClick={() => {
                      scrollTo("skills");
                    }}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    className="font-medium hover:text-purple-500 duration-300"
                    onClick={() => {
                      scrollTo("projects");
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    className="font-medium hover:text-purple-500 duration-300"
                    onClick={() => {
                      scrollTo("contact");
                    }}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a
                    className="font-medium hover:text-purple-500 duration-300"
                    href="https://drive.google.com/uc?export=download&id=1WeY-amg4wy5TNnBEZaamjDSDSchCNO0P"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={
            scrollToTopVisible
              ? "btn rounded-r-none p-0.5 xl:p-3 fixed right-0 bottom-10 bg-white z-50"
              : "hidden"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Nav;
