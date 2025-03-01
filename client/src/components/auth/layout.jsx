
import { Outlet } from "react-router-dom";


function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-[#0b100e] w-1/2 px-12">
            <img 
            src="/img/main.png" 
            alt="TechHive" 
            className="w-full h-auto object-contain"
            />
            </div>
            <div className="flex flex-1 items-center justify-center bg-[#c9c0b3] bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
}
export default AuthLayout;