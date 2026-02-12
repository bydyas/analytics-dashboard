import { Angry } from "lucide-react";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "./ui/empty";
import { Button } from "./ui/button";
import { Activity } from "react";

export interface IErrorContentProps {
    message?: string;
    refresh?: boolean;
}

export default function ErrorContent({ message = 'No details mentioned', refresh = false }: IErrorContentProps) {
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
            <Activity  mode={refresh ? 'visible' : 'hidden'}>
                <EmptyContent>
                    <Button className="mt-6" onClick={() => window.location.reload()}>Refresh</Button>
                </EmptyContent>
            </Activity>
        </EmptyHeader>
        </Empty>
    )
}