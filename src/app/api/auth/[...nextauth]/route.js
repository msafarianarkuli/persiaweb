import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import verify from "@/services/api/auth/verify";
import Cookies from "js-cookie";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { code, phone } = credentials;
        const body = {
          code,
          phone,
        };
        try {
          const res = await verify(body);
          const { data } = res;

          return {
            id: 8,
            ...data,
          };
        } catch (e) {
          let message = e?.data?.message || "";
          throw new Error(message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ token, session }) {
      session.user = {
        message: token.message,
        access_token: token.access_token,
        type: token.type,
        id: token.user.id,
        first_name: token.user.first_name,
        last_name: token.user.last_name,
        phone: token.user.phone,
        is_staff: token.user.is_staff,
        is_admin: token.user.is_admin,
        phone_verified_at: token.user.phone_verified_at,
        avatar: token.user.avatar,
        created_at: token.user.created_at,
        updated_at: token.user.updated_at,
        full_name: token.user.full_name,
      };

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
