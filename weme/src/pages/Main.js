import Header from "../components/Header";
import HotPostCard from "../components/HotPostCard";
import {CarouselTransition} from "../components/CarouselTransition";
import PostCard from "../components/PostCard";
import axios from "axios";
import env from "../functions/Env";
import {useEffect, useState} from "react";

const Main = () => {
    const [postData, setPostData] = useState()


    useEffect(() => {
        axios.get(`${env.API_URL}/api/post/`, {})
            .then(res => {
                setPostData(res.data);
            })
            .catch()

    }, []);



    return (
        <div>
            <div className="flex flex-col  min-h-screen max-w-lg mx-auto bg-gray-100 pt-14 space-y-1">
                <Header />
                <CarouselTransition />
                <div className="flex text-3xl text-left px-6 pt-6">
                    🔥 이번주 인기 모집글
                </div>

                {postData ? <HotPostCard hotpostcards={postData}/> : ''}


                <div className="flex flex-col justify-between pt-6">
                    <div className="flex space-x-2 px-6">
                        <button className="focus:text-gray-400 hover:scale-110">전체</button>
                        <button className="focus:text-gray-400 hover:scale-110">프로젝트</button>
                        <button className="focus:text-gray-400 hover:scale-110">스터디</button>
                    </div>

                    {postData ? <PostCard postcards={postData}/> : ''}

                </div>
            </div>
        </div>
    );
}

export default Main;