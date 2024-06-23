"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

 
interface NavbarType {
    id: number;
    title: string;
    path: string;
    isActive: boolean;
}
 export const Navbar = ({ searchShow }: { searchShow: boolean }) => {
    const pathName = usePathname()
    const navList = [
        {
            id: 1,
            title: 'Home',
            path: '/',
            isActive:pathName == "/" ? true : false
        },
        {
            id: 2,
            title: 'Shop',
            path: '/shop',
            isActive:pathName.includes("/shop") ? true : false
        },
        {
            id: 3,
            title: 'Plant Care',
            path: '/plant',
            isActive:pathName == "/plant" ? true : false
        },
        {
            id: 4,
            title: 'Blogs',
            path: '/blogs',
            isActive:pathName == "/blogs" ? true : false
        }
    ]
    return (
        <nav className="hidden md:block">
            <ul className={`${searchShow ? "pb-[11px]" : "pb-[17px]"} flex items-center justify-center space-x-[50px]`}>
                {navList.map((item:NavbarType) => (
                   <li key={item.id}>
                     <Link  className={`${item.isActive ? "font-bold border-b-[3px] border-[#46A358] " : "font-normal"} text-[#3D3D3D] ${searchShow ? "pb-[25px]" : "pb-[23px]"} text-[16px] leading-[20.11px]`} href={item.path}>{item.title}</Link>
                   </li>
                ))}
            </ul>
        </nav>
    )
 }