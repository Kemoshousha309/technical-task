import { AddIcon } from "./Icons/add";
import { EarthIcon } from "./Icons/earth";
import { LogoIcon } from "./Icons/logo";
import { NotificationIcon } from "./Icons/notification";
import { SearchIcon } from "./Icons/search";
import Image from 'next/image';
import profile from "../../../public/images/profile.png"
import { Button } from "./UI/Button";
import { NavItem } from "./UI/NavItem";
import { BurgerIcon } from "./Icons/burger";

export function Header() {
    const nav = ["Home", "Blog", "Gifts"]

    return (
        <header className="flex justify-between mt-4 mb-16 min-w-[340px]">    
            <div className="flex items-center">
                <span className="md:hidden mx-2 cursor-pointer" >
                    <BurgerIcon  />
                </span>
                <a href="#" className="">
                    <LogoIcon />
                </a>
                <nav className="max-md:hidden" >       
                    <ul className="flex ">
                        {nav.map((n, i) => {
                            let active = i == 0 ? true : false;
                            return  <NavItem key={n} value={n} active={active} />
                        })}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-8 max-sm:gap-3">
                <span className="cursor-pointer">
                    <SearchIcon   />
                </span>
                <span className="cursor-pointer">
                    <NotificationIcon />
                </span>
                <figure className="w-10 max-[380px]:w-7 rounded-full overflow-hidden ">
                    <Image 
                        src={profile}
                        alt="User Avatar"
                        width={10}
                        height={10}
                        layout="responsive" 
                        className="cursor-pointer"
                    />
                </figure>
                
                <Button styles="max-lg:hidden">
                    <AddIcon />
                    Add New Product
                </Button>

                <span className="flex gap-2 max-lg:hidden cursor-pointer " >
                    <EarthIcon /> EN
                </span>
           </div>
        </header>
    )
}






