import Link from "next/link";

export const CONTAINER = "mx-auto w-full max-w-[1208px] px-4 sm:px-6 lg:px-8";

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = `inline-flex h-12 cursor-pointer items-center justify-center rounded-[4px] bg-[#1A91F0] px-6 text-[16.9px] leading-6 font-medium text-white no-underline hover:bg-[#1580d8] ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} className={classes}>
      {children}
    </Link>
  );
}

export function SecondaryButton({
  children,
  href = "#",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = `inline-flex h-12 cursor-pointer items-center justify-center rounded-[4px] bg-[#1A91F0]/10 px-6 text-[16.8px] leading-6 font-medium text-[#1A91F0] no-underline hover:bg-[#1A91F0]/20 ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-[16.6px] leading-6 text-[#1A91F0] no-underline hover:underline"
    >
      {children}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M10 7L15 12L10 17"
          stroke="#1A91F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-center text-[30px] leading-9 font-normal text-[#1E2532] sm:text-[38px] sm:leading-[46px] lg:text-[45px] lg:leading-[52px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function StarRating({
  rating = 4.7,
  size = 20,
}: {
  rating?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = i === Math.floor(rating) && rating % 1 >= 0.2;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 32 32"
            aria-hidden
          >
            <path
              d="M16 2.5L19.5 12H29.5L21.5 18L24.5 28L16 22L7.5 28L10.5 18L2.5 12H12.5L16 2.5Z"
              fill={filled || half ? "#00B67A" : "#B8BECC"}
            />
            {half && (
              <path
                d="M16 2.5L19.5 12H16V28L7.5 28L10.5 18L2.5 12H12.5L16 2.5Z"
                fill="#00B67A"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export function AiBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded bg-[#BEC2FE]/50 px-2 py-1 text-[13px] leading-4 font-semibold tracking-[0.3px] text-[#5660E8]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M10 2L12 7H17L13 10L14 15L10 12L6 15L7 10L3 7H8L10 2Z"
          fill="#5660E8"
        />
      </svg>
      AI-powered
    </span>
  );
}
