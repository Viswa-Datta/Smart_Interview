import { Interview } from "@/types"
import { z } from "zod";

interface FormMockInterviewProps {
    initialData: Interview | null
}

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
    return (
        <div>Form mock interview</div>
    )
}