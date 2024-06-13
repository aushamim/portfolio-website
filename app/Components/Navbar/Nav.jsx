"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [navAutoHide, setNavAutoHide] = useState(false);
  useEffect(() => {
    let prevScrollpos = window.scrollY;
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }

      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setNavAutoHide(false);
      } else {
        setNavAutoHide(true);
      }
      prevScrollpos = currentScrollPos;
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
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav
        className={`h-16 sticky left-0 right-0 duration-300 px-5 xl:px-20 bg-white bg-opacity-90 backdrop-blur ${
          navAutoHide ? "-top-16" : "top-0"
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

          <div className="drawer drawer-end block xl:hidden">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-end">
              {/* Page content here */}
              <label htmlFor="nav-drawer">
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
                htmlFor="nav-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
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
            <Link
              className="font-medium text-gray-500 hover:text-purple-500 duration-300"
              href="resume"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

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
              ? "btn rounded-r-none p-0.5 xl:p-3 fixed right-0 bottom-10 bg-white"
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
