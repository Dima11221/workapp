// import Image from "next/image";

const Home = () => {
	return (
		<>
			<h1>Помощник для специалистов Markway</h1>
		<a
			className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="dark:invert"
				src="/vercel.svg"
				alt="Vercel logomark"
				width={16}
				height={16}
			/>
			Deploy Now
		</a>
		</>
	)
}

export default Home