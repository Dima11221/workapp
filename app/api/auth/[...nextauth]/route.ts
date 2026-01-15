import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const allowedEmails = [
  'shatrovskaya.markway@gmail.com',
  'kurykhalov@gmail.com',
  'hramov.markway@gmail.com',
  'bandorin.markway@gmail.com',
  'nelepova.markway@gmail.com',
  'murmel.markway@gmail.com',
  'shugaeva.n.markway@gmail.com',
  'vasilyev.markway@gmail.com',
];


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Проверяем, есть ли email в разрешенном списке
        const isValidEmail = allowedEmails.includes(credentials.email);

        if (!isValidEmail) {
          return null;
        }

        // TODO: Заменить на реальную проверку паролей
        const isValidPassword = credentials.password === "temporary_password";

        if (!isValidPassword) {
          return null;
        }

        return {
          id: credentials.email,
          email: credentials.email,
          name: credentials.email.split('@')[0],
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});

export { handler as GET, handler as POST };