import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!, // (!) = non-null assertion operator
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // You can add additional providers here like: Gitlab, facebook, twitter, ...
    ],
})