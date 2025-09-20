import React from "react";

const PublicLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <>
      {/* NavBar */}

      {/* Main */}
      <main className="layout-width">{children}</main>

      {/* Footer */}
    </>
  );
};

export default PublicLayout;
