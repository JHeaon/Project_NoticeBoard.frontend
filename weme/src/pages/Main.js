import Header from "../components/Header";
import HotPostCard from "../components/HotPostCard";
import {CarouselTransition} from "../components/CarouselTransition";
import PostCard from "../components/PostCard";

const Main = () => {


    return (
        <div className="flex flex-col  min-h-screen max-w-lg mx-auto bg-gray-100 pt-14 space-y-1">
            <Header />
            <CarouselTransition />
            <div className="flex text-3xl text-left px-6 pt-6">
                    🔥 이번주 인기 모집글
            </div>
            <div className="grid grid-cols-2 gap-x-4 px-4 pb-6">
                <HotPostCard/>
                <HotPostCard/>
            </div>

            <div className="flex justify-start space-x-3 px-6 pt-6">
                <button className="focus:text-gray-400 hover:scale-110">전체</button>
                <button className="focus:text-gray-400 hover:scale-110">프로젝트</button>
                <button className="focus:text-gray-400 hover:scale-110">스터디</button>
            </div>

            <div className="flex flex-col justify-center items-center space-y-5 pb-5 px-4">
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
}

export default Main;