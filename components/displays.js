export function ShowOnMobile({ children }) {
  return (
    <div className="block lg:hidden">
      {children}
    </div>
  );
}

export function ShowOnDesktop({ children }) {
  return (
    <div className="hidden lg:block">
      {children}
    </div>
  );
}