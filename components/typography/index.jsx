// Typography components

// Heading 1 (Large)
export function Title({ children, className = "" }) {
    return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
}

// Heading 2 (Medium)
export function TitleMD({ children, className = "" }) {
    return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
}

// Heading 3 (Small)
export function TitleSM({ children, className = "" }) {
    return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}

// Paragraph
export function Text({ children, className = "" }) {
    return <p className={`text-base ${className}`}>{children}</p>;
}

// Small Text (for captions or less important text)
export function Small({ children, className = "" }) {
    return <small className={`text-sm text-gray-600 ${className}`}>{children}</small>;
}

// Bold Text
export function Bold({ children, className = "" }) {
    return <strong className={`font-bold ${className}`}>{children}</strong>;
}

// Italic Text
export function Italic({ children, className = "" }) {
    return <em className={`italic ${className}`}>{children}</em>;
}

// List (unordered)
export function List({ children, className = "" }) {
    return <ul className={`list-disc pl-6 ${className}`}>{children}</ul>;
}

// List item (for unordered list)
export function ListItem({ children, className = "" }) {
    return <li className={`${className}`}>{children}</li>;
}

// Ordered List
export function OrderedList({ children, className = "" }) {
    return <ol className={`list-decimal pl-6 ${className}`}>{children}</ol>;
}

// Blockquote (for quotes)
export function Blockquote({ children, className = "" }) {
    return <blockquote className={`border-l-4 pl-4 italic text-gray-700 ${className}`}>{children}</blockquote>;
}

// Lead Text (typically used for introductory text)
export function Lead({ children, className = "" }) {
    return <p className={`text-lg font-semibold ${className}`}>{children}</p>;
}

// Code Block
export function Code({ children, className = "" }) {
    return <code className={`bg-gray-200 px-2 py-1 rounded text-sm ${className}`}>{children}</code>;
}

// Preformatted Code Block (for larger code blocks)
export function Pre({ children, className = "" }) {
    return <pre className={`bg-gray-800 text-white p-4 rounded ${className}`}>{children}</pre>;
}

// Text Utility for color
export function TextColor({ children, color = "text-black", className = "" }) {
    return <span className={`${color} ${className}`}>{children}</span>;
}

// Text Utility for text alignment
export function TextAlign({ children, align = "text-left", className = "" }) {
    return <div className={`${align} ${className}`}>{children}</div>;
}

// Text Utility for font size
export function TextSize({ children, size = "text-base", className = "" }) {
    return <span className={`${size} ${className}`}>{children}</span>;
}

// Text Utility for truncating (Clamping)

// Truncate for one line (with ellipsis)
export function TruncateOneLine({ children, className = "" }) {
    return <div className={`truncate ${className}`}>{children}</div>;
}

// Truncate for three lines (with ellipsis)
export function TruncateThreeLines({ children, className = "" }) {
    return <div className={`line-clamp-3 ${className}`}>{children}</div>;
}
