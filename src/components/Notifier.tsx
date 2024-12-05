import { useEffect } from "react";

type Props = {
    task: string;
    open: boolean;
    onClose: () => void;
}

export const Notifier = ({ task, open, onClose }: Props) => {
    useEffect(() => {
        let timerId: NodeJS.Timeout;
        console.log('applying setTimeout in useEffect')
        if (open) {
            timerId = setTimeout(() => {
                onClose();
            }, 2000);
        }

        return () => {
            console.log('applying setTimeout in useEffect')

            clearTimeout(timerId)};
    }, [open]);

    if (!open) {
        return null;
    }

    return(
        <div className="blackout">
            <div className="notifier-wrapper" data-testid='notifier'>
                {task}
            </div>
        </div>
    );
}