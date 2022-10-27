// your domain.com/news
import Link from 'next/link';

const NewsPage = () => {
    return <>
        <p>The news page</p>
        <ul>
            <li>
                <Link href="/news/nextjs-artical">Next.js-artical</Link>
            </li>
            <li>
                <Link href="/news/reactjs-artical">React.js-artical</Link>
            </li>
        </ul>
    </>
};
  
export default NewsPage;