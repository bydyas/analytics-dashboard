import { Angry } from "lucide-react";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "./ui/empty";

export interface IErrorContentProps {
    message?: string;
}

export default function ErrorContent({ message = 'No details mentioned' }: IErrorContentProps) {
    return (
        <Empty className="border border-dashed min-h-[310px] w-full">
        <EmptyHeader>
            <EmptyMedia variant="icon">
            <Angry />
            </EmptyMedia>
            <EmptyTitle>Something went wrong</EmptyTitle>
            <EmptyDescription className='whitespace-pre-line'>
                {message}
            </EmptyDescription>
        </EmptyHeader>
        </Empty>
    )
}