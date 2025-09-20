import React, { useState } from "react";

const Hamburger = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden px-8"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>
      {mobileMenuOpen && <div>Mobile Menu</div>}
    </>
  );
};

export default Hamburger;
