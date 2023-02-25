import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
			<div className='layout'>
				<Toaster position='top-center' reverseOrder={false} />
				<Navbar />
				<main className='px-8 md:px-12 lg:px-24 my-8'>{children}</main>
				<Footer />
			</div>
		)
}