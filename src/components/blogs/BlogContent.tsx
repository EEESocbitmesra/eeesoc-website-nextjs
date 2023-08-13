import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./Blogs.module.css";

interface Props {
  content: string;
}

export default function BlogContent({ content }: Props) {
  return (
    <div className={styles.postBody}>
      <ReactMarkdown
        components={{
          // Add syntax highlighting to codes in markdown
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              // eslint-disable-next-line react/no-children-prop
              <SyntaxHighlighter language={match[1]}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // Find images in markdown and display them as next/image
          // Images are present inside p tags
          p: (paragraph) => {
            const { node } = paragraph;
            if ((node.children[0] as any).tagName === "img") {
              const image = node.children[0];

              return (
                <Image
                  src={getImageSrc((image as any).properties.src)}
                  alt={content.substring(0, 20)}
                  height={432}
                  width={768}
                  style={{ objectFit: "cover" }}
                />
              );
            }
            return <p>{paragraph.children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
