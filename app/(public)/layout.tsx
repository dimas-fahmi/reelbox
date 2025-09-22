import Footer from "@/src/ui/components/Footer";
import NavBar from "@/src/ui/components/NavBar";
import React from "react";

const PublicLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Main */}
      <main className="layout-width">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PublicLayout;
