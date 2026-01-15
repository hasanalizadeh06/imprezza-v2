
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen w-full">
			{/* <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8"> */}
				<Header />
				{children}
				<Footer />
			{/* </main> */}
		</div>
	);
};

export default Layout;
