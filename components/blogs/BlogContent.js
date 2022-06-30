import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import NextImage from "../../layouts/NextImage";
import styles from "./Blogs.module.css";

export default function BlogContent({ content }) {
  return (
    <div className={styles.postBody}>
      <ReactMarkdown
        components={{
          // Add syntax highlighting to codes in markdown
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
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
            if (node.children[0].tagName === "img") {
              const image = node.children[0];

              return (
                <NextImage
                  src={image.properties.src}
                  alt={content.substr(0, 20)}
                  height={432}
                  width={768}
                  objectFit="contain"
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
