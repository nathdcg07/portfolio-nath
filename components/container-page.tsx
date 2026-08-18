interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-32 md:pb-40">
            {children}
        </div>
    );
}

export default ContainerPage;