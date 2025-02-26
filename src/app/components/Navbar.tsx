/** @format */

"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PratijjaDropdown from "./PratijjaDropdown";
import MobileNav from "./MobileNav";
import { IoClose, IoMenu } from "react-icons/io5"; // Icons for mobile menu

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	// Toggle Navbar visibility on mobile
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	// Handle Navbar background change on scroll

	return (
		<>
			{/* Fixed Navbar */}
			<MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
			<nav
				className={`absolute top-0 left-0 right-0 z-50 w-full h-[70px] md:h-[80px]]"
				} flex items-center transition-all duration-300`}>
				<div className="flex max-w-[1300px] mx-auto justify-between w-full px-6 lg:px-20 py-2 items-center text-white">
					{/* Left Side Logo */}
					<div className="hidden sm:flex space-x-4">
						<Image src="/kiitLogo.png" alt="kiit logo" height={50} width={50} />
						<Image src="/kslogo.png" alt="ksac logo" height={50} width={50} />
					</div>

					{/* Main Logo */}
					<div className="flex-shrink-0">
						{!isOpen && (
							<Link href="/">
								<Image
									src="/main.png"
									alt="pratijja logo"
									width={100}
									height={50}
									quality={50}
									className="w-28 md:w-44 pt-1 lg:pt-2"
								/>
							</Link>
						)}
					</div>

					{/* Desktop Navigation */}
					<div className="hidden sm:flex items-center text-lg space-x-6">
						<Link
							href="/"
							className={`relative transition-all duration-200 ${
								pathname === "/"
									? "bg-gradient-to-r from-[#7F654A] via-[#EBCE89] to-[#7F654A] text-transparent bg-clip-text"
									: "hover:bg-gradient-to-r hover:from-[#7F654A] hover:via-[#EBCE89] hover:to-[#7F654A] hover:text-transparent hover:bg-clip-text"
							}`}>
							Home
						</Link>
						<Link
							href="/about"
							onClick={() => window.location.href = "/about"}
							className={`relative transition-all duration-200 ${
								pathname === "/about"
									? "bg-gradient-to-r from-[#7F654A] via-[#EBCE89] to-[#7F654A] text-transparent bg-clip-text"
									: "hover:bg-gradient-to-r hover:from-[#7F654A] hover:via-[#EBCE89] hover:to-[#7F654A] hover:text-transparent hover:bg-clip-text"
							}`}>
							About
						</Link>
						<div className="relative group">
							<span className="cursor-pointer rounded-full p-3 hover:text-[#ebce89] transition-all duration-200">
								Register
							</span>
							<PratijjaDropdown />
						</div>
					</div>

					{/* Mobile Navigation Button */}
					<button
						className="sm:hidden text-white p-2 focus:outline-none relative z-50"
						onClick={toggleNavbar}>
						{isOpen ? (
							<IoClose size={30} className="text-white" />
						) : (
							<IoMenu size={30} className="text-white" />
						)}
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
