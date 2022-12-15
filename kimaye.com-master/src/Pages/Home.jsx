import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mainhomepage">
        {/* //......................Banner.................// */}

        <div className="courserbanners">
          <div
            id="carouselExampleInterval"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Date-launch-post-whatsapp-banner-desktop_1512x.jpg?v=1654259038"
                  className="d-block w-100"
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-100px",
                  }}
                >
                  <h2
                    style={{
                      backgroundColor: "red",
                      width: "40%",
                      margin: "auto",
                      borderRadius: "10px",
                      padding: "10px",
                      fontFamily: "cursive",
                      color: "white",
                      fontSize:"20px"
                    }}
                  >
                    SAVIOUR EARTHY fLAVORS
                  </h2>
                  <br />
                  <h2
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      width: "40%",
                      margin: "auto",
                      padding:"8px",
                      fontFamily: "cursive",
                      color: "white",
                    }}
                  >
                    KIMAYE FRESH DATES
                  </h2>
                  <br />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => navigate("allfruits")}
                  >
                    Shop Now
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Indian-plum-and-peach-banner_1512x.jpg?v=1653914762"
                  className="d-block w-100"
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-100px",
                  }}
                >
                  <h2
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      fontFamily: "cursive",
                      width: "40%",
                      margin: "auto",
                      padding: "10px",
                      color: "white",
                    }}
                  >
                    HEART OF STONE BUT
                  </h2>
                  <br />
                  <h2
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      width: "40%",
                      margin: "auto",
                      color: "white",
                      padding: "8px",
                      fontFamily: "cursive",
                    }}
                  >
                    FRUIT OF BENEFITS
                  </h2>
                  <br />
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => navigate("freshcuts")}
                  >
                    Shop Now
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Tarty-Sweetness-banner_1512x.jpg?v=1653914749"
                  className="d-block w-100"
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-100px",
                  }}
                >
                  <h2
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      fontFamily: "cursive",
                      width: "40%",
                      margin: "auto",
                      padding: "10px",
                      color: "white",
                    }}
                  >
                    GIFT OF NORTH
                  </h2>
                  <br />
                  <h2
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      fontFamily: "cursive",
                      width: "40%",
                      margin: "auto",
                      padding: "8px",
                      color: "white",
                    }}
                  >
                    KIMAYE CHERRIES
                  </h2>
                  <br />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => navigate("fruitcombos")}
                  >
                    Shop Now
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* // .......................... RECOMMENDS...................// */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontFamily: "cursive",
            padding: "30px",
            marginTop: "100px",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>KIMAYE RECOMMENDS</h1>
          <h4>A Handpicked and Curated Fruit offering</h4>
        </div>

        <div className={styles.recommend}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "50px" }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_527x430.png?v=1614338437"
                alt=""
                style={{ borderRadius: "20px" }}
              />
              <br />
              <br />
              <h3>ALL FRUITS</h3>
              <p>pick and choose from a wide range of delicious fruits</p>
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
                onClick={() => navigate("allfruits")}
              >
                Shop Now
              </button>
            </div>

            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_527x430.png?v=1614338730"
                alt=""
                style={{ borderRadius: "20px" }}
              />
              <br />
              <br />
              <h3>FRESH CUTS</h3>
              <p>We want to spoon-feed you… quite literally</p>
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
                onClick={() => navigate("freshcuts")}
              >
                Shop Now
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_527x430.jpg?v=1614339080"
                alt=""
                style={{ borderRadius: "20px" }}
              />
              <br />
              <br />
              <h3>FRUIT COMBOS</h3>
              <p>Indulge in fruit combinations created by us</p>
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
                onClick={() => navigate("fruitcombos")}
              >
                Shop Now
              </button>
            </div>

            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_527x430.jpg?v=1631516874"
                alt=""
                style={{ borderRadius: "20px" }}
              />
              <br />
              <br />
              <h3>GIFTS BY KIMAYE</h3>
              <p>Healthy {"&"} memorable gifts for your loved ones</p>
              <button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
                onClick={() => navigate("giftsbykimaye")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* //...............know More section...............// */}

        <div className={styles.mainknowmore}>
          <div className={styles.submainknowmore}>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_670x.png?v=1622009438"
                alt=""
                width={"457px"}
                height={"699px"}
              />
            </div>
            <div>
              <h3 style={{ fontWeight: "bold" }}>
                WE’D LIKE TO SAY <span style={{ color: "red" }}>KIMA</span>HI…
              </h3>
              <br />
              <br />
              <p>
                Many of us share common safety concerns about the food we eat.
              </p>
              <br />
              <br />
              <p>
                When it comes to fruits, these concerns are even more serious in
                terms of the way they are grown and handled throughout their
                farm-to-home journey. We make eating fruits a worry-free and
                enjoyable experience for you.
              </p>
              <p>
                Since 2009, we have set the benchmark for fruit safety and
                quality in 35 countries. Kimaye is now expanding its footprint
                in India, bringing you multiple varieties of fruit that are
                grown, packaged, and delivered in the safest and most socially
                responsible manner.
              </p>
              <h4
                style={{
                  color: "black",
                  backgroundColor: "white",
                  width: "55%",
                }}
              >
                Kimaye is #all<span style={{ color: "red" }}>Safe</span>#all
                <span style={{ color: "red" }}>Good</span>
              </h4>
              <br />
              <br />
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </div>

        {/* //................secrets section................// */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontFamily: "cursive",
            fontWeight: "bold",
          }}
        >
          <h1 style={{ fontWeight: "800" }}>
            THE SECRET’S OUT: WE’RE SUPER SAFE
          </h1>

          <p style={{ fontSize: "25px" }}>Witness Our Journey</p>
        </div>

        {/* //.................01...............// */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            padding: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: "100px",
                  color: " #7d9c5b",
                  fontWeight: "bold",
                }}
              >
                01
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Grown</h4>
              <h4>responsibly</h4>
              <p style={{ width: "60%" }}>
                We follow G.A.P (Good Agricultural Practices) to ensure food
                safety.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149"
              alt=""
              width={"555px"}
              height={"410px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* //........................02..................// */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            padding: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: "100px",
                  color: " #7d9c5b",
                  fontWeight: "bold",
                }}
              >
                02
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Handpicked</h4>
              <h4>at farms</h4>
              <p style={{ width: "60%" }}>
                Our trained Harvesting Supervisors ensure only the best fruits
                are picked.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925"
              alt=""
              width={"555px"}
              height={"410px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* //........................03..................// */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            padding: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: "100px",
                  color: " #7d9c5b",
                  fontWeight: "bold",
                }}
              >
                03
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Earning</h4>
              <h4>the Kimaye badge</h4>
              <p style={{ width: "60%" }}>
                Stringent quality checks at our automated pack house ensure only
                the best fruits go through.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148"
              alt=""
              width={"555px"}
              height={"410px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* //........................04..................// */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            padding: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: "100px",
                  color: " #7d9c5b",
                  fontWeight: "bold",
                }}
              >
                04
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Zero-touch</h4>
              <h4>processes</h4>
              <p style={{ width: "60%" }}>
                The fruits are then packaged and delivered fresh in a
                contamination-free environment.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925"
              alt=""
              width={"555px"}
              height={"410px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* //........................05..................// */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            padding: "100px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: "100px",
                  color: " #7d9c5b",
                  fontWeight: "bold",
                }}
              >
                05
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>Finally</h4>

              <p style={{ width: "60%" }}>
                Tell us all about how you enjoy our fruits using{" "}
                <i>
                  #all
                  <span style={{ color: "red" }}>Safe</span>#all
                  <span style={{ color: "red" }}>Good</span>
                </i>
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925"
              alt=""
              width={"555px"}
              height={"410px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        {/* //........................00..................// */}

        {/* //........................00..................// */}
      </div>
    </div>
  );
};

export default Home;
