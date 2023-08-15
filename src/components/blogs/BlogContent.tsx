"use client";

import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  content: string;
}

const Code = ({ className, children }: any) => {
  const language = className.replace("lang-", "");

  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

export default function BlogContent({ content }: Props) {
  return (
    <div className="mt-10">
      <Markdown
        options={{
          overrides: {
            h1: { props: { className: "mt-10" } },
            h2: { props: { className: "mt-10" } },
            h3: { props: { className: "mt-10" } },
            h4: { props: { className: "mt-10" } },
            h5: { props: { className: "mt-10" } },
            h6: { props: { className: "mt-10" } },
            ol: { props: { className: "list-decimal" } },
            ul: { props: { className: "list-disc" } },
            li: { props: { className: "list-inside mt-4" } },
            a: { props: { className: "text-blue" } },
            p: { props: { className: "my-4" } },
            img: {
              component: Image,
              props: {
                width: 768,
                alt: "image of blog",
                height: 432,
                className: "object-cover my-4 rounded",
              },
            },
            code: Code,
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
