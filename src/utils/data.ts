import { prisma } from "./prisma";

export const getPosts = async () => {
    try {
        const posts = await prisma.post.findMany();
        return posts;
    } catch (e) {
        throw new Error("Failed to fetch posts data")
    }
}