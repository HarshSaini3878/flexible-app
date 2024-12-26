import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { name, password } = credentials;

        // Static data for testing
        const validUser = {
          id: "1",
          name: "harkirat",
          email: "harkirat@gmail.com",
          password: "test123", // Avoid hardcoding passwords in production!
        };

        // Simple static validation
        if (username === validUser.name && password === validUser.password) {
          return {
            id: validUser.id,
            name: validUser.name,
            email: validUser.email,
          };
        }

        // If credentials are invalid
        throw new Error("Invalid username or password");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
