import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, image, href, className, children, ...props }) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );
  const inner = (
    <span className="relative flex items-center">
      {image && (
        <Image
          src={image}
          alt="Logo"
          width={32}
          height={32}
          className="mr-2"
          priority
        />
      )}
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
