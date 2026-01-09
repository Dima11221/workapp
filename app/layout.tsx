import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {TheHeader} from "@/app/components/Header/TheHeader";
import {TheFooter} from "@/app/components/Footer/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "База знаний Markway",
  description: "Хранилище важной информации и необходимые ресурсы для работы сотрудников",
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
			<body className={`${inter.className} testCenter content`}>
				<TheHeader />
					<main className='main'>
						{children}
					</main>
				<TheFooter />
			</body>
    </html>
  );
}
