import Link from 'next/link'

const fetchComments = async (id) => {
    await new Promise<void>((resolve, reject) => {
        setTimeout(resolve, 1000);
    });


    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        cache: 'no-store'
    })
        .then(response => response.json())
        .catch(error => {
            throw new Error(error + " Error al cargar los comentarios");
        })
}

export default async function CommentsPage({ params }) {
    const { id } = params
    const comments = await fetchComments(id)
    return (
        <ul className='p-5'>
            {comments.map(comment => (
                <li key={comment.id} className='border border-blue-500 p-4 rounded-lg text-sm ml-4 my-4'>
                    <p>{comment.body}</p>
                    <p><strong>{comment.name}</strong></p>
                    <p><small>{comment.email}</small></p>
                </li>
            ))}
        </ul>
    )
}