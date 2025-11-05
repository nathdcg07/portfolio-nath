import Image from "next/image";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlGithub } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-80 text-center">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={150} height={150} className="w-full md:w[200px] mask-auto rounded-2xl h-auto"
            />

            <div className="flex gap-2 mt-2">
                <a
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                    >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default PortfolioBox