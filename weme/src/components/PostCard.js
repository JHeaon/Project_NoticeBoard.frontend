import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function PostCard() {
  return (
    <Card className="mt-6 mx-4 w-full">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-6 w-6 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography color="blue-gray" className="mb-2 text-sm">
          마감일 | 2021.10.1
        </Typography>
        <Typography color="blue-gray" className="mb-2 text-xl">
          UI/UX Review Check
        </Typography>
        <Typography className="text-ms">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
        <div className='text-sm text-right mt-4'></div>
        <Typography color="blue-gray" className="flex justify-between mb-2 text-sm">

          <div className="flex justify-between space-x-3 border-t-2 border-gray-300 w-full pt-4">
            <div>작성자 : 정해원</div>
            <div>조회수 : 514</div>
          </div>

        </Typography>
      </CardBody>
    </Card>
  );
}

export default PostCard;