import React from "react";

function Footer() {
  const yil = new Date().getFullYear();
  return (
    <div className="bg-dark p-3 d-flex text-info ">
      <i class="p-2 fs-1 tetx-blue fab fa-twitter-square"></i>
      <i class="p-2 fab fa-facebook-square"></i>
      <i class="p-2 fab fa-instagram-square"></i>
      <p className="footer text-light text-center w-100"> Copyright ⓒ {yil}</p>
      <i class="float-right p-2 fas fa-envelope-square"></i>
      <i class="float-right p-2 fas fa-phone"></i>
    </div>
  );
}
export default Footer;
