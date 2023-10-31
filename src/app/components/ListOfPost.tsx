"use client"
import LikeButton from "./LikeButton"
import Link from 'next/link'

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
        // next: {
        //     revalidate: 60
        // }
    })
        .then(response => response.json())
}

export default async function ListOfPosts() {

    const posts = await fetchPosts();
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold mb-5">Lista de Publicaciones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(0, 20).map((post) => (
                    <article key={post.id} className="p-6 rounded-lg shadow-md">
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <h2 className="text-xl font-bold mb-2 text-blue-700">{post.title}</h2>
                            <p>{post.body}</p>
                            <LikeButton id={post.id} />
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}