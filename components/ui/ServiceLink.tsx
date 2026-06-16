"use client";

import { useRouter } from "next/navigation";

const SESSION_KEY = "simulasi_return_anchor";

type Props = {
  href: string;
  anchorId: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Drop-in replacement for <Link> inside the "What we offer" list.
 * Before navigating, it saves the anchor ID to sessionStorage so the
 * BackButton can scroll precisely back to that list item on return.
 */
export function ServiceLink({ href, anchorId, children, className }: Props) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    sessionStorage.setItem(SESSION_KEY, anchorId);
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export { SESSION_KEY };
