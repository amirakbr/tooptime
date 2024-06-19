import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4  w-[95%] mx-auto">{children}</div>;
};

export default Layout;
