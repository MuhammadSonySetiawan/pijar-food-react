import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/Profile.css";
import NavbarPhone from "../components/NavbarPhone";

import React from "react";

function Profile() {
  return (
    <div className="">
      {/* <!-- start of header --> */}
      {/* <Navbar /> */}
      {/* <!-- end of header --> */}

      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown">
            <Navbar />
          </div>
        </nav>
        <div className="mt-2 d-flex justify-content-end align-items-center hide-desktop">
          <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img src="images/menu.webp" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <NavbarPhone />
          </div>
        </div>
      </header>

      {/* <!-- Start of Content --> */}
      <div className="container mb-4">
        <div className="d-flex justify-content-center mt-2">
          <img src="images/profile.webp" className="rounded-circle" alt="Cinque Terre" width="100" height="100" />
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <h3 className="text-center text-primary">Sonny</h3>
        </div>
      </div>
      {/* <!-- end of content --> */}

      {/* <!-- Start Header Recipes --> */}

      <header>
        <section id="popular-recipe">
          <div className="container d-flex bd-highlight mb-3">
            <div className="menu-recipes mt-4">
              <div className="row animate__animated animate__fadeInDown mb-4">
                <div className="col-12">
                  <div>
                    <a className="text-primary fw-bold" href="#">
                      My Recipes
                    </a>
                    <a className="text-primary fw-bold text-decoration-none mx-4" href="#">
                      Seved Recipes
                    </a>
                    <a className="text-primary fw-bold text-decoration-none" href="#">
                      Liked Recipes
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/sugarSalmon.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Sugar Salmon</h3>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/bombChicken.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Bomb Chicken</h3>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/chikenKare.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Chiken Kare</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* <!-- end Header recipes --> */}

      {/* <!-- start of footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Profile;
