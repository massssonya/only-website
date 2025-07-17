"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, AnchorHTMLAttributes } from "react";
import { sleep } from "../utils";

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

interface Props extends LinkProps, AnchorProps {
    children: ReactNode;
}

export function TransitionLink({ children, href, ...props }: Props) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        await sleep(500);
        router.push(href as string);
        await sleep(500);
    }
    return (
        <Link
            href={href}
            {...props}
            onClick={handleTransition}
        >
            {children}
        </Link>
    );
}