import Image from "next/image";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlGithub, urlDemo } = data

    return (
        <div className="flex flex-col justify-between p-4 border border-teal-50 rounded-xl bg-slate-900/50 backdrop:blur-sm"
        >
            <h3 className="mb-4 text-lg text-center line-clamp-1">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={150} height={150} className="w-full md:w-[200px] mx-auto rounded-2xl h-48 object-cover"
            />

            <div className="flex gap-2 mt-4 justify-center">
                <a
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center p-2 transition duration-150 rounded-lg bg-slate-600 hover:bg-slate-600"
                    >
                    GitHub
                </a>
                <a
                    href={urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center p-2 text-sm transition duration-150 rounded-lg bg-teal-400 hover:bg-teal-500 font-medium"
                    >
                    Live Demo
                </a>
            </div>
        </div>
    );
}

export default PortfolioBox;