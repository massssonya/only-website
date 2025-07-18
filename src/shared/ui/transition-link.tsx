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
        const outlet = document.getElementById("outlet");
        const header = document.getElementById("header-page-name");
        if(outlet && header){
            outlet.classList.add("page-transition");
            header.classList.add("header-transition");
            await sleep(500);
            router.push(href as string);
            await sleep(500);
            outlet.classList.remove("page-transition");
            header.classList.remove("header-transition");
        }
        
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