"use client"
import { useSearchParams } from 'next/navigation';
import Image from "next/image"

const Beranda = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const thumbnail = searchParams.get('thumbnail');
    const description = searchParams.get('description');
    const pubDate = searchParams.get('pubDate');

    return (
        <div className='py-32'>
            <h2>{title}</h2>
            <p>{pubDate}</p>
            {thumbnail && <Image src={thumbnail} width={600} height={400} alt={title} />}
            <p>{description}</p>
        </div>
    )
}

export default Beranda;
