import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  //this is blog component where q/a are given
  return (
    <div>
      <div
        ref={ref}
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Ybjxsp6/bg-1.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className=" border border-amber-200 p-7 lg:px-12 lg:py-9">
            <h1 className="mb-5 text-center text-3xl lg:text-5xl font-bold text-amber-500">
              Blogs Q/A
            </h1>
            <ul className="mb-5 list-decimal text-lg leading-loose ">
              <li>
                <ul>
                  <li className="text-amber-200">
                    Ques: Tell us the differences between uncontrolled and
                    controlled components.
                  </li>
                  <p>
                    Ans: The main difference between uncontrolled and controlled
                    components in React is that uncontrolled components store
                    their own state internally, while controlled components have
                    their state managed by the parent component through props.
                    This means that controlled components offer more control and
                    predictability, while uncontrolled components can be simpler
                    to use.
                  </p>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="text-amber-200">
                    Ques: How to validate React props using PropTypes?
                  </li>
                  <p>
                    Ans: PropTypes is a type-checking library for React that
                    allows you to validate the props passed to a component. You
                    can use PropTypes to ensure that the props have the correct
                    type and shape, which can help prevent errors and make your
                    code more robust. PropTypes can be used to define required
                    props, default values, and more.
                  </p>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="text-amber-200">
                    Ques: Tell us the difference between nodejs and express js..
                  </li>
                  <p>
                    Ans: Node.js is a runtime environment for executing
                    JavaScript code outside of a web browser, while Express.js
                    is a web application framework built on top of Node.js.
                    Node.js provides a platform for running JavaScript on the
                    server, while Express.js adds features like routing,
                    middleware, and templating to make it easier to build web
                    applications.
                  </p>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="text-amber-200">
                    Ques: What is a custom hook, and why will you create a
                    custom hook?
                  </li>
                  <p>
                    Ans: Custom hooks are a way to reuse stateful logic in React
                    components. By creating a custom hook, you can encapsulate
                    complex logic and reuse it across multiple components.
                    Custom hooks can be used to manage state, fetch data from
                    APIs, handle form validation, and more. They are created by
                    combining existing hooks and logic into a new hook function.
                    You might create a custom hook to make your code more
                    reusable, reduce duplication, or simplify complex logic.
                  </p>
                </ul>
              </li>
            </ul>
            <div className="text-center">
              {" "}
              <Pdf targetRef={ref} filename="QA.pdf">
                {({ toPdf }) => (
                  <button className="btn btn-primary" onClick={toPdf}>
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
