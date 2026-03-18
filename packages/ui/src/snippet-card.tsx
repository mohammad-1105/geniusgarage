import React from "react";
import { Card } from "./card";
import { CodeBlock } from "./code-block";

interface SnippetCardProps {
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string;
}

// TODO: Export SnippetCard function component that:
//   - Wraps everything in a Card component
//   - Shows title as h3
//   - Shows createdAt below title
//   - Renders CodeBlock with code and language
//   - Maps over tags and renders each as a styled span

export function SnippetCard({
  title,
  language,
  code,
  tags,
  createdAt,
}: SnippetCardProps) {
  return (
    <Card>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            fontSize: "0.875rem",
            color: "#666",
          }}
        >
          <span>{createdAt}</span>
        </div>
      </div>
      <CodeBlock code={code} language={language}></CodeBlock>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.25rem 0.75rem",
              backgroundColor: "#f0f0f0",
              borderRadius: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
