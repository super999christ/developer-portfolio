import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function ArticleLink({ title, url }) {
  return (
    <a
      className="flex justify-center text-blue-400 text-sm"
      href={url}
      target="_blank"
    >
      {title || url}
      <ArrowTopRightOnSquareIcon width={20} height={20} />
    </a>
  );
}