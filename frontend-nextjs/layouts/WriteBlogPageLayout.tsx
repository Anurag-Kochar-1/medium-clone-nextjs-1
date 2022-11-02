import WriteBlogTopBar from "../components/Mobile/TopBar/WriteBlogTopBar";

interface HomeLayoutProps {
    children: React.ReactNode
}


const WriteBlogPageLayout = ({children}:HomeLayoutProps) => {
    return (
        <div className="grid grid-cols-12">

            <WriteBlogTopBar/>
            {children}

        </div>
    )
}

export default WriteBlogPageLayout