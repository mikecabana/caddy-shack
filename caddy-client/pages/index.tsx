import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Caddy Client</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

            </main>

            <footer>

            </footer>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`http://caddy-client:3000/api/caddy/config`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {}
    }
}