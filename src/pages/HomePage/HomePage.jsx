import { useState } from 'react';

import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <>
      <div className="home-page">
        <div className="p-5 mb-4 bg-white border rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just like the one in previous versions of
              Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
            </p>

            <Link to="/new-post" className="btn btn-primary btn-lg" type="button">
              Create new post
            </Link>

            <button type="button" className="btn btn-primary btn-lg ms-5" onClick={toggle}>
              Open banner
            </button>
          </div>
        </div>

        <div className="mt-2 mb-5 banner">
          <CSSTransition timeout={300} in={isOpen} unmountOnExit>
            <div>
              <div className="row align-items-md-stretch">
                <div className="col-md-6">
                  <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>View your account</h2>
                    <p>
                      Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
                      Then, mix and match with additional component themes and more.
                    </p>
                    <Link to="/account" className="btn btn-outline-light" type="button">
                      View your account
                    </Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="h-100 p-5 bg-white border rounded-3">
                    <h2>View posts</h2>
                    <p>
                      Or, keep it light and add a border for some added definition to the boundaries of your content. Be
                      sure to look under the hood at the source HTML here as we&apos;ve adjusted the alignment and
                      sizing of both column&apos;s content for equal-height.
                    </p>
                    <Link to="/posts" className="btn btn-outline-secondary" type="button">
                      View posts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </>
  );
};
