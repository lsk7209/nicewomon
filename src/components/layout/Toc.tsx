import Link from "next/link";

export interface TocItem {
  id: string;
  label: string;
}

interface TocProps {
  items: TocItem[];
  title?: string;
}

/**
 * Simple Table of Contents component.
 * Provide section ids that match heading anchors in the page.
 */
export function Toc({ items, title = "목차" }: TocProps) {
  if (!items.length) return null;

  return (
    <nav className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm">
      <p className="text-sm font-semibold text-gray-800 mb-3">{title}</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} className="hover:text-rose-600">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

