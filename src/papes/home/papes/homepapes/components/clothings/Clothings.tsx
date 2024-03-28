import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Clothings = () => {
  return (
    <section id="clothing" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 className="display-3 fw-normal">Pet Clothing</h2>
          <div>
            <Link
              to="#"
              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
            >
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <ArrowForwardIcon />
              </svg>
            </Link>
          </div>
        </div>
        <div className="products-carousel swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div className="card position-relative">
                <a href="single-product.html">
                  <img
                    src="images/item1.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div className="card-text">
                    <span className="rating secondary-font">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      5.0
                    </span>

                    <h3 className="secondary-font text-primary">$18.00</h3>

                    <div className="d-flex flex-wrap mt-3">
                      <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="#" className="btn-wishlist px-4 pt-3 ">
                        <FavoriteIcon className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div className="card position-relative">
                <a href="single-product.html">
                  <img
                    src="images/item1.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div className="card-text">
                    <span className="rating secondary-font">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      5.0
                    </span>

                    <h3 className="secondary-font text-primary">$18.00</h3>

                    <div className="d-flex flex-wrap mt-3">
                      <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="#" className="btn-wishlist px-4 pt-3 ">
                        <FavoriteIcon className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div className="card position-relative">
                <a href="single-product.html">
                  <img
                    src="images/item1.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div className="card-text">
                    <span className="rating secondary-font">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      5.0
                    </span>

                    <h3 className="secondary-font text-primary">$18.00</h3>

                    <div className="d-flex flex-wrap mt-3">
                      <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="#" className="btn-wishlist px-4 pt-3 ">
                        <FavoriteIcon className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                New
              </div>
              <div className="card position-relative">
                <a href="single-product.html">
                  <img
                    src="images/item1.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>

                  <div className="card-text">
                    <span className="rating secondary-font">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/Vector.png?alt=media&token=7a491382-9c4b-447b-8278-d376491c7cf1"
                        alt=""
                        className="text-primary"
                      />
                      5.0
                    </span>

                    <h3 className="secondary-font text-primary">$18.00</h3>

                    <div className="d-flex flex-wrap mt-3">
                      <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a href="#" className="btn-wishlist px-4 pt-3 ">
                        <FavoriteIcon className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothings;
