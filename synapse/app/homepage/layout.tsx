import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function RootLayout({
                                       children,
                                   }:
                                       Readonly<{
                                           children: React.ReactNode;
                                       }>) {
    return (
        <div>
            <main className="flex-1">{children}</main>
        </div>
    );
}