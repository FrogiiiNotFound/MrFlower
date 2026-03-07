import { Outlet } from "react-router-dom";
import Header from "@widgets/header/ui/Header";
import Footer from "@widgets/footer/ui/Footer";
import { Toaster } from "@/shared/components/ui/sonner";

export const MainLayout: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
            <Toaster className="z-[9999]" />
        </div>
    );
};
