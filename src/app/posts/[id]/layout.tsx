import Link from 'next/link'

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store'
    }).then(response => response.json())
}


export default async function Post({ children, params }) {
    const { id } = params
    const post = await fetchPost(id)
    return (
        <article className="p-6 rounded-lg shadow-md">
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <h2 className="text-xl font-bold mb-2 text-blue-700">{post.title}</h2>
                <p>{post.body}</p>

            </Link>
            <Link href={`/posts/${id}/comments`}> Ver comentarios</Link>
            {children}
        </article>
    )
}