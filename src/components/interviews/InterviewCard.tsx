import parse from "html-react-parser";

import { Interview } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

interface Props {
  interview: Interview;
  interviewId: string;
}

export default function InterviewCard({ interview, interviewId }: Props) {
  return (
    <div className="w-full xl:w-[calc(33%-16px)]">
      <div className="p-4 shadow-container">
        {/* Image */}
        <div className="mb-3">
          <Image
            src={getImageSrc(interview.image)}
            alt={interview.name}
            height={333}
            width={333}
            className="object-cover w-full aspect-square"
          />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full px-4 py-3 mt-4 text-sm font-medium uppercase transition-all rounded text-blue hover:bg-blue hover:text-white">
              {interview.company}
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] min-w-[60vw] overflow-y-scroll">
            <DialogHeader className="font-semibold uppercase">
              {interview.name}
            </DialogHeader>
            <DialogDescription>{interview.company}</DialogDescription>
            <div className="w-full divider bg-gray" />
            <div>
              <p>{parse(interview.interviewContent)}</p>

              <div className="flex flex-col items-center mt-8">
                <h5>Links:</h5>
                <a
                  className="mb-3 text-center text-purple"
                  href={interview.facebookInterviewLink ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Link
                </a>
              </div>
            </div>

            <div className="w-full divider bg-gray" />

            <DialogFooter>
              <button className="px-4 py-2 rounded text-neutral-500 hover:bg-neutral-500 hover:text-white">
                Close
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
