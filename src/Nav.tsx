import { AssignmentTwoTone, HomeFilled } from "@mui/icons-material"

export const Nav = () => {
    return (
        <div className="w-screen bg-gray-100 flex flex-row justify-between p-2">
            <div className="flex">
                <HomeFilled />
            </div>
            <div className="flex justify-end space-x-1 underline decoration-2">
                <div className="font-bold">Task Flow</div>
                <AssignmentTwoTone color="primary" />
            </div>
        </div>
    )
}
