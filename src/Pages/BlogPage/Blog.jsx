import React from "react";
import { Card, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <Card className="my-5 mx-auto p-5 ">
        <h2 className="text-info">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>{" "}
        <img
          className="w-75 img-fluid"
          src="https://i.stack.imgur.com/BPJjA.png"
          alt=""
        />
        <h4 className="fw-bold">Access Token</h4>
        <p className="text-secondary">
          An access token is an object that describes the security context of a
          process or thread. A token is used to make security decisions and
          store tamper-proof information about some system entity. While a token
          is generally used to represent only security information, it can hold
          additional free-form data attached while the token is created.
        </p>{" "}
        <h4 className="fw-bold">refresh token</h4>
        <p className="text-secondary">
          The refresh token is used to authenticate the user after the initial
          access token has expired
        </p>{" "}
        <h2 className="text-info">
          {" "}
          How do they work and where should we store them on the client-side?
        </h2>{" "}
        <p className="tex-secondary">
          When user stays on the page for quite long time without interaction,
          'access token' expires. Then user performs some action and API
          responds with 401. Usually, there is a 'refresh token' which is kept
          on the client. And after having 401 as response, UI should refresh the
          'access token' using the 'refresh token'. If there is no 'refresh
          token', then UI can simply re-authenticate user and obtain fresh
          'access token
        </p>
      </Card>
      <Card className="mx-auto my-5 p-5">
        <h2 className="text-info"> Compare SQL and NoSQL databases?</h2>

        <div className="d-lg-flex gap-5">
          <p className="w-100">
            {" "}
            <span className="fw-bold">SQL databases</span>{" "}
            <li>Tables with fixed rows and columns</li>{" "}
            <li>
              Developed in the 1970s with a focus on reducing data duplication{" "}
            </li>{" "}
            <li>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</li>
          </p>
          <p className="w-100">
            {" "}
            <span className="fw-bold">NoSQL databases</span> <br />{" "}
          </p>{" "}
          <li>
            {" "}
            columns Document: JSON documents, Key-value: key-value pairs,
            Wide-column: tables with rows and dynamic columns, Graph: nodes and
            edges
          </li>{" "}
          <li>
            Developed in the late 2000s with a focus on scaling and allowing for
            rapid application change driven by agile and DevOps practices.
          </li>{" "}
          Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB,
          Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune
        </div>
      </Card>

      <Card className="my-5 mx-auto p-5">
        <h2 className="text-info">What is express js? What is Nest JS ?</h2>
        <h4 className="fw-bold">Express Js</h4>{" "}
        <p className="text-secondary">
          Express is a minimal and flexible Node.js web application framework
          that provides a robust set of features for web and mobile
          applications.
        </p>
        <h4 className="fw-bold">Nest js</h4>
        <p className="text-secondary">
          NestJS is a framework for building efficient, scalable Node.js web
          applications.{" "}
        </p>
      </Card>
      <Card className="my-5 mx-auto p-5">
        <h2 className="text-info">
          What is MongoDB aggregate and how does it work ?
        </h2>
        <p className="text-secondary">
          When working with data in MongoDB, you may quickly have to run complex
          operations, with multiple stages of operations to gather metrics for
          your project. Generating reports and displaying useful metadata are
          just two major use cases where MongoDB aggregation operations can
          prove incredibly useful, powerful, and flexible. <br />
          When you need to do more complex aggregation, you can use the MongoDB
          aggregation pipeline (here’s a more detailed tutorial). Aggregation
          pipelines are collections of stages that, combined with the MongoDB
          query syntax, will allow you to obtain an aggregated result.
        </p>
      </Card>
    </Container>
  );
};

export default Blog;
