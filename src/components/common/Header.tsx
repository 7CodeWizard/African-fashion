'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"

import { useRouter } from "next/navigation"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Link,
    Dropdown,
    DropdownItem,
    DropdownTrigger,
    DropdownMenu,
    Avatar,
    Button
} from "@nextui-org/react"
import { signIn, signOut, useSession } from "next-auth/react"
import { LuLogIn, LuLogOut } from "react-icons/lu"
import { TbSunMoon } from "react-icons/tb"
import { MdTravelExplore } from "react-icons/md"
import { FaSuitcaseRolling } from "react-icons/fa"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../app/fonts/SpicyRice-Regular.ttf' })

export default function Header() {
    const { status, data } = useSession();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const storedDarkMode = localStorage.getItem("darkMode");
            return storedDarkMode === "true";
        }
        return false;
    });
    const handleLoginClick = () => signIn("google");
    const handleLogoutClick = () => signOut();
    const router = useRouter();

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (typeof window !== "undefined") {
            localStorage.setItem("darkMode", newDarkMode.toString());
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                if (newDarkMode) {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                if (isDarkMode) {
                    htmlElement.classList.add("dark");
                } else {
                    htmlElement.classList.remove("dark");
                }
            }
        }
    }, [isDarkMode]);

    return (
        <Navbar className="h-16 bg-neutral-100 dark:bg-[#18181b] dark:text-black shadow-lg dark:border-b-1 dark:border-primaryHotefy-lighter">
            <NavbarBrand className={myFont.className}>
                <Link href="/">
                    <span className=" text-[24px] text-primaryHotefy-neutral dark:text-primaryHotefy-lighter ">African Fashion</span>
                    <Image
                        src="/logo.png"
                        alt="fashion"
                        width={60}
                        height={0}
                        priority
                        style={{ width: "auto", height: "auto", borderRadius: "30%" }}
                    />

                </Link>
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                {
                    status === 'loading' && (
                        <Button
                            variant="shadow"
                            color='secondary'
                            isLoading
                            isIconOnly
                        ></Button>
                    )
                }
                {status === 'unauthenticated' && (
                    <Dropdown placement="right-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as='button'
                                className="transition-transform"
                                color="secondary"
                                name=""
                                size="sm"
                                src=""
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Login Actions"
                            variant="shadow"
                            color="secondary"
                        >
                            <DropdownItem
                                startContent={<LuLogIn />}
                                key="login"
                                onClick={handleLoginClick}
                            >
                                Login
                            </DropdownItem>
                            <DropdownItem
                                startContent={<TbSunMoon />}
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? 'light' : 'dark'}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
                {
                    status === 'authenticated' && (
                        <Dropdown placement="right-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name={data?.user?.name!}
                                    size="sm"
                                    src={data?.user?.image!}
                                />
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Profile Actions"
                                variant="shadow"
                                color="secondary"
                                disabledKeys={["user-info"]}
                            >
                                <DropdownItem className="h-14 gap-2" key="user-info">
                                    <p className="font-semibold">{data?.user?.name}</p>
                                    <p className="text-xs">{data?.user?.email}</p>
                                </DropdownItem>
                                <DropdownItem
                                    startContent={<MdTravelExplore />}
                                    onClick={() => router.push("/")}
                                >
                                    My Profile
                                </DropdownItem>
                                <DropdownItem
                                    startContent={<LuLogOut />}
                                    key="logout"
                                    color="secondary"
                                    onClick={handleLogoutClick}
                                >
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    )
                }
            </NavbarContent>
        </Navbar>
    )
}