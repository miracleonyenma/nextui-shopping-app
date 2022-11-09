// ./layouts/Default.jsx

import SiteHeader from "../components/SIteHeader";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
};

export default DefaultLayout;
