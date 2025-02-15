import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Headings } from "@/components/headings"
import { Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const Dashboard = () => {
    return (
        <>
            <div className="flex w-full items-center justify-between">
                {/* headings */}
                <Headings
                    title="Dashboard"
                    description="Create and start you AI Mock interview"
                />
                <Link to={"/generate/create"}>
                    <Button size={"sm"}>
                        <Plus /> Add New
                    </Button>
                </Link>

                <Separator className="my-8" />
            </div>
        </>
    )
}