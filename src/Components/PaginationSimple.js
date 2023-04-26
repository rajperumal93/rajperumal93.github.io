import axios from 'axios';
import { useState, useEffect } from 'react';

const PaginationSimple = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [postFetched, setPostFetched] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPost(res.data);
            setLoading(false);
            setPostFetched(true);
        }
        fetchPost();
    }, []);


    //Pagination post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

    //Pagination buttons
    const totalPost = post.length;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }

    const changePage = (page) => {
        setCurrentPage(page);
    }


    return (
        <div>
            <ul>
                {
                    currentPost.map(p => (
                        <li key={p.id}>{p.title}</li>
                    ))
                }
            </ul>

            <ul>
                {
                    pageNumbers.map(pn => {
                        return <li key={pn} onClick={() => {changePage(pn)}}>{pn}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PaginationSimple;