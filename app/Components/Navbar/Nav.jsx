"use client";
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
    <nav
      className={`h-14 sticky left-0 right-0 duration-300 px-20 bg-red-200 ${
        navAutoHide ? "-top-14" : "top-0"
      }`}
    >
      <div className="h-full flex items-center">
        <div className="flex-grow">Hello</div>

        <div className="drawer drawer-end">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="nav-drawer"
              className="drawer-button btn btn-primary"
            >
              Open drawer
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

        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              scrollTo();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollTo("skills");
            }}
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollTo("projects");
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
            }}
          >
            Contact
          </button>
          <Link href="resume">Resume</Link>
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
    </nav>
  );
};

export default Nav;
