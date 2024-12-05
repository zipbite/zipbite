export function ShowOnMobile({ children }) {
  return (
    <div className="block md:hidden">
      {children}
    </div>
  );
}

export function ShowOnDesktop({ children }) {
  return (
    <div className="hidden md:block">
      {children}
    </div>
  );
}