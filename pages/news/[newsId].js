// domain.com/news/somthing-id
import { useRouter } from "next/router";

const Details = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    console.log(newsId);

    return <p>The details page {newsId}</p>
};

export default Details;