import Logo from "../assets/image/Logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html">
            <img src={Logo} alt="Logo" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link main-font active"
                  aria-current="page"
                  href="home.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link main-font" href="watchlist.html">
                  Watchlist
                </a>
              </li>
              <li className="nav-item">
                <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel"
                        >
                          Login
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <p>Belum Punya Akun?</p>
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabindex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel2"
                        >
                          Register
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputPassword1"
                              className="form-label"
                            >
                              Re-Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <p>Sudah Punya Akun ?</p>
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Back to Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
