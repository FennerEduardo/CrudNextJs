import { Suspense } from 'react'
import ListOfPosts from '@/app/components/ListOfPost'

export default async function PostsPage() {

    return (
        <section>
            <Suspense fallback={<p>Cargando posts...</p>}>
                <ListOfPosts />
            </Suspense>
        </section>
    )
}