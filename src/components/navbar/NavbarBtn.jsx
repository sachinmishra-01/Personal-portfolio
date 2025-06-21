import { Link } from "react-scroll";
import { LuArrowUpRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" px-3 py-1 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowUpRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
