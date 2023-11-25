import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import env from "../functions/Env";

const Detail = (props) => {
    const [postData, setPostData] = useState()
    const id = useParams().id;


    const techDict = {
        1 : '파이썬',
        2 : 'C',
        3 : 'C#',
    }

    const positionDict = {
         1 : '백엔드',
         2 : '프론트엔드',
    }

    useEffect(() => {
        axios.get(`${env.API_URL}/api/post/${id}/`, {})
            .then(res => {
                setPostData(res.data);
            })
            .catch()

    }, []);

    return (
        <div>
            <div className="flex flex-col  min-h-screen max-w-lg mx-auto bg-gray-100 pt-14 space-y-1">
                <Header />
                {!!postData?
                    <div className="flex flex-col justify-between text-3xl text-left px-6 pt-6">
                        <div className = "text-center border-b-2 border-gray-500 p-4 w-full"> {postData.title} </div>
                        <div className = "grid grid-cols-2 gap-x-4 gap-y-6 px-4 pb-8 py-10 border-b-2 border-gray-500 border-2 mt-4 rounded-2xl text-xl">
                            <div>모집 구분 : {postData.kind}</div>
                            <div>진행 방식 : {postData.status}</div>
                            <div>모집 인원 : {postData.recruit}</div>
                            <div>시작 예정 : {postData.deadline}</div>
                            <div>예상 기간 : {postData.duration}</div>
                            <div>모집 분야 : {positionDict[postData.position]}</div>
                            <div>기술 스택 : {techDict[postData.techstack]}</div>
                            <div>오픈 채팅 : <a href={postData.kakao}>{postData.kakao}</a> </div>
                        </div>
                        <div className='mt-4 p-4 border-t-2 border-gray-500'>
                            프로젝트 소개
                        </div>
                        <div className='pt-8 p-4'>
                            {postData.content}
                        </div>
                    </div>
                    : ""}


            </div>
        </div>

    )
}

export default Detail;