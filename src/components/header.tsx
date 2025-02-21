// import { cn } from "@/lib/utils"
// import { useAuth } from "@clerk/clerk-react"
// import { NavLink } from "react-router-dom"
// import Container from "./container"
// import LogoContainer from "./logo-container"
// import NavigationRoutes from "./navigation-routes"
// import ProfileContainer from "./profile-container"
// import ToggleContainer from "./toggle-container"

// const Header = () => {
//     const {userId} = useAuth()

//     return (
//         <header className={cn(
//             "w-full border-b duration-150 transition-all ease-in-out"
//         )}>
//             <Container>
//                 <div className="flex items-center gap-4 w-full">

//                     {/* logo section */}
//                     <LogoContainer />

//                     {/* navigation section */}
//                     <nav className="hidden md:flex items-center gap-3">
//                         <NavigationRoutes />
//                         {userId && (
//                             <NavLink  
//                                 to={"/generate"} 
//                                 className={({isActive}) => cn("text-base text-neutral-600", isActive && "text-neutral-900 font-semibold")}
//                             >
//                                 Take Interview
//                             </NavLink>
//                         )}
//                     </nav>

//                     <div className="ml-auto flex items-center gap-6">
//                         {/* profile section */}
//                         <ProfileContainer />

//                         {/* mobile toggle section */}
//                         <ToggleContainer />
//                     </div>
//                 </div>
//             </Container>
//         </header>
//     )
// }

// export default Header


//////////////////////////////////////////////////////////////////
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import Container from "./container";
import LogoContainer from "./logo-container";
import NavigationRoutes from "./navigation-routes";
import ProfileContainer from "./profile-container";
import ToggleContainer from "./toggle-container";

const Header = () => {
    const { userId } = useAuth();

    return (
        <header className={cn(
            "w-full border-b bg-white shadow-sm transition-all ease-in-out"
        )}>
            <Container>
                <div className="flex items-center justify-between py-4">

                    {/* Logo Section */}
                    <LogoContainer />

                    {/* Navigation Section */}
                    <nav className="hidden md:flex items-center gap-6">
                        <NavigationRoutes />
                        {userId && (
                            <NavLink  
                                to={"/generate"} 
                                className={({ isActive }) => cn(
                                    "text-base font-medium px-4 py-2 rounded-lg transition duration-300",
                                    isActive 
                                        ? "bg-gray-900 text-white shadow-lg" 
                                        : "text-gray-600 hover:bg-gray-100"
                                )}
                            >
                                🎤 Take Interview
                            </NavLink>
                        )}
                    </nav>

                    {/* Right Section: Profile & Toggle */}
                    <div className="flex items-center gap-6">
                        <ProfileContainer />
                        <ToggleContainer />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
