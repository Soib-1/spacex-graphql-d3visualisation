import React from "react";
import { withIronSession } from "next-iron-session";
import SecretData from "./../components/SecretData"

const PrivatePage = ({ user }) => (
  <SecretData />
);

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      res.statusCode = 404;
      res.end();
      return { props: {} };
    }

    return {
      props: { user }
    };
  },
  {
    cookieName: "spacex-graphql-d3visualisation",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

export default PrivatePage;