// Grids
export function Grid({ children, className = "", gap = "gap-6" }) {
    return <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${gap} ${className}`}>{children}</div>;
}

export function GridItem({ children, className = "", colSpan = "col-span-1" }) {
    return <div className={`${colSpan} ${className}`}>{children}</div>;
}

// Flex boxes
export function Flex({ children, className = "", justify = "flex-start", align = "items-start" }) {
    return <div className={`flex justify-${justify} ${align} ${className}`}>{children}</div>;
}

export function FlexBox({ children, className = "", justify = "flex-start", align = "items-start" }) {
    return <div className={`flex flex-col justify-${justify} ${align} ${className}`}>{children}</div>;
}

export function Row({ children, className = "", gap = "gap-4" }) {
    return <div className={`flex flex-row ${gap} ${className}`}>{children}</div>;
}

export function Column({ children, className = "", gap = "gap-4" }) {
    return <div className={`flex flex-col ${gap} ${className}`}>{children}</div>;
}

// Devices
export function ShowOnMobile({ children, className = "" }) {
    return <div className={`block sm:hidden ${className}`}>{children}</div>;
}

export function ShowOnDesktop({ children, className = "" }) {
    return <div className={`hidden sm:block ${className}`}>{children}</div>;
}

// Main layouts
export function Layout({ children, className = "", padding = "px-6" }) {
    return <main className={`max-w-7xl mx-auto ${padding} ${className}`}>{children}</main>;
}

export function Content({ children, className = "", gap = "gap-8", padding = "py-8" }) {
    return <section className={`flex flex-col ${gap} ${padding} ${className}`}>{children}</section>;
}

// Other
export function Spacer({ size = "my-4", className = "" }) {
    return <div className={`${size} ${className}`} />;
}