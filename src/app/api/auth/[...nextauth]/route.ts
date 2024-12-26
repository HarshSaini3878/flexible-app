import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
 // Use bcrypt for password hashing

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const { name, password } = credentials;

        // Static data for testing (replace this with DB query in production)
        const validUser = {
          id: "1",
          name: "harkirat",
          email: "harkirat@gmail.com",
          password: "124", // Hashed password (test123)
        };

        // Simple static validation (replace with DB user lookup)
        if (name === validUser.name && password==validUser.password) {
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
  pages: {
    signIn: "/auth/signin", // You can customize the signin page if needed
  },
  callbacks: {
    async session({ session, token }) {
      // You can add custom session properties here
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      // Save user data to the token when they log in
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

// Export handlers for app router
const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
