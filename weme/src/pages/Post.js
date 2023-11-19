import Header from "../components/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

function Post (){

    // useState 정의
    const [kind, setKind] = useState('프로젝트');
    const [recruite, setRecruite] = useState();
    const [status, setStatus] = useState('온라인');
    const [duration, setDuration] = useState('1개월');
    const [deadline, setDeadline] = useState();
    const [kakao, setKakao] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [errormsg, setErrormsg] = useState('');
    const [choicePosition, setChoicePosition] = useState()
    const [choiceTech, setChoiceTech] = useState()

    const [position, setPosition] = useState();
    const [tech, setTech] = useState();
    // Handler 정의
    const onKindHandler = (event) => {
        setKind(event.currentTarget.value);
    }

    const onRecruiteHandler = (event) => {
        setRecruite(event.currentTarget.value);
    }

    const onStatusHandler = (event) => {
        setStatus(event.currentTarget.value);
    }

    const onDurationHandler = (event) => {
        setDuration(event.currentTarget.value);
    }

    const onChoiceTechHandler = (event) => {
        setChoiceTech(event.currentTarget.value);
    }

    const onDeadlineHandler = (event) => {
        setDeadline(event.currentTarget.value);
    }

    const onChoicePositionHandler = (event) => {
        setChoicePosition(event.currentTarget.value);
    }

    const onKakaoHandler = (event) => {
        setKakao(event.currentTarget.value);
    }

    const onTitleHandler = (event) => {
        setTitle(event.currentTarget.value);
    }

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value);
    }

    const techList = () => {
        return (
            <select value={choiceTech} className='p-2' onChange={onChoiceTechHandler}>
                <option selected disabled> 기술 선택 </option>
                {tech.map((tech) => {
                    return (
                        <option key={tech['id']}>{tech['name']}</option>
                    );
                })}
            </select>
        )
    }

    const positionList = () => {
        return (
            <select value={choicePosition} className='p-2' onChange={onChoicePositionHandler}>
                <option selected disabled> 포지션 선택 </option>
                {position.map((tech) => {
                    return (
                        <option key={tech['id']}>{tech['name']}</option>
                    );
                })}
            </select>
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const techDict = {
            '파이썬' : 1,
            'C' : 2,
            'C#' : 3,
        }

        const positionDict = {
            '백엔드' : 1,
            '프론트엔드': 2,
        }


        console.log(jwtDecode(localStorage.getItem('token'))['user_id'], kind, recruite, status, duration, techDict[choiceTech], deadline, positionDict[choicePosition], kakao, title, content)


        axios.post("http://localhost:8000/api/post/", {
            "recruite": recruite,
            "kind": kind,
            "status": status,
            "duration": duration,
            "deadline": deadline,
            "kakao": kakao,
            "title": title,
            "content": content,
            "author": jwtDecode(localStorage.getItem('token'))['user_id'],
            "position": [positionDict[choicePosition]],
            "techstack": [techDict[choiceTech]],
        }, {
        }).then(res => {
            console.log(res.data);
            window.location.href = '/';
        }).catch((err) => {
            console.log(err);
        })


        // window.location.href = '/';
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/techstack/", {}).then(res => {
            setTech(res.data['results']);
        })

        axios.get("http://localhost:8000/api/position/", {}).then(res => {
            setPosition(res.data['results']);
        })
    }, []);

    return (
        <div>
            <div className="flex flex-col min-h-screen max-w-lg mx-auto bg-gray-100 pt-14 space-y-1">
                <Header />
                <form className="flex flex-col pt-10 px-6 space-y-8 justify-start min-h-screen" onSubmit={submitHandler}>
                    <div className="text-3xl"> 프로젝트 정보를 입력해 주세요. </div>

                    <div className="flex flex-col space-y-2">
                        <label> 모집 구분 </label>
                        <select value={kind} onChange={onKindHandler} className="p-2">
                            <option>프로젝트</option>
                            <option>스터디</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 모집 인원 </label>
                        <input type='text' value={recruite || ""} onChange={onRecruiteHandler} className="p-2" placeholder="숫자를 입력해 주세요."/>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 진행 방식 </label>
                        <select value={status} onChange={onStatusHandler} className="p-2">
                            <option>온라인</option>
                            <option>오프라인</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 진행 기간 </label>
                        <select value={duration} onChange={onDurationHandler} className="p-2">
                            <option>1개월</option>
                            <option>2개월</option>
                            <option>3개월</option>
                            <option>4개월</option>
                            <option>5개월</option>
                            <option>6개월</option>
                            <option>1년 이상</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 사용하는 주요 기술 스택 </label>
                        {!!tech ? techList() : ''}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 모집 마감일 </label>
                        <input type='date' value={deadline} onChange={onDeadlineHandler} className="p-2" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 모집 포지션 </label>
                        {!!position ? positionList() : ''}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 카카오톡 오픈채팅 </label>
                        <input type='text' value={kakao || ""} onChange={onKakaoHandler} className="p-2" placeholder="오픈채팅방 주소를 입력해 주세요."/>
                    </div>

                    <div className="text-3xl pt-5"> 프로젝트에 대해 소개해주세요. </div>

                    <div className="flex flex-col space-y-2">
                        <label> 제목 </label>
                        <input type='text' value={title || ""} onChange={onTitleHandler} className="p-2" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label> 내용 </label>
                        <textarea value={content || ""} onChange={onContentHandler} className="p-2 h-40" />
                    </div>

                    <div>{errormsg}</div>

                    <input type='submit' value='모집하기' className="bg-blue-500 text-center py-5 hover:bg-blue-700 text-white font-bold px-4 rounded" />
                </form>
            </div>
        </div>)
}


export default Post;