import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import Prismic from '@prismicio/client';

export default function Posts() {
    
    return(
        <>
            <Head>
                <title> Posts | Ignews </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>02/02/2021</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris metus, molestie et fringilla commodo, tincidunt quis massa. Nulla ac justo nec velit lacinia volutpat sit amet feugiat massa. Quisque neque orci, interdum sed erat eget, pulvinar cursus neque. Vivamus vulputate ipsum a rhoncus dapibus. Vestibulum dignissim neque non ligula sagittis, eget dapibus lorem aliquam. Duis varius eu massa vel vehicula. Duis eget risus quis neque venenatis fermentum. Quisque pharetra dictum velit sit amet tempus. Phasellus mollis et nulla at porta. Fusce laoreet elit dolor, a sodales arcu dapibus sed. Fusce maximus vehicula diam, quis suscipit nibh convallis eget.

</p>
                    </a>
                    <a href="#">
                        <time>02/02/2021</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris metus, molestie et fringilla commodo, tincidunt quis massa. Nulla ac justo nec velit lacinia volutpat sit amet feugiat massa. Quisque neque orci, interdum sed erat eget, pulvinar cursus neque. Vivamus vulputate ipsum a rhoncus dapibus. Vestibulum dignissim neque non ligula sagittis, eget dapibus lorem aliquam. Duis varius eu massa vel vehicula. Duis eget risus quis neque venenatis fermentum. Quisque pharetra dictum velit sit amet tempus. Phasellus mollis et nulla at porta. Fusce laoreet elit dolor, a sodales arcu dapibus sed. Fusce maximus vehicula diam, quis suscipit nibh convallis eget.

</p>
                    </a>
                    <a href="#">
                        <time>02/02/2021</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris metus, molestie et fringilla commodo, tincidunt quis massa. Nulla ac justo nec velit lacinia volutpat sit amet feugiat massa. Quisque neque orci, interdum sed erat eget, pulvinar cursus neque. Vivamus vulputate ipsum a rhoncus dapibus. Vestibulum dignissim neque non ligula sagittis, eget dapibus lorem aliquam. Duis varius eu massa vel vehicula. Duis eget risus quis neque venenatis fermentum. Quisque pharetra dictum velit sit amet tempus. Phasellus mollis et nulla at porta. Fusce laoreet elit dolor, a sodales arcu dapibus sed. Fusce maximus vehicula diam, quis suscipit nibh convallis eget.

</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.query(
        [
            Prismic.predicates.at('document.type' , 'publication')
        ],
        {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        })
        console.log(response)
    return {
        props : {}
    }
}