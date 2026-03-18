"use client";

import { Button } from "@geniusgarage/ui/button";
import { SnippetCard } from "@geniusgarage/ui/snippet-card";
import { useState } from "react";
import { formatDate } from "@geniusgarage/utils";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: Date;
}

const initialSnippets: Snippet[] = [
  {
    id: 1,
    title: "Array Reduce Pattern",
    language: "javascript",
    code: "const sum = arr.reduce((acc, n) => acc + n, 0)",
    tags: ["javascript", "array", "functional"],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    title: "React useEffect Cleanup",
    language: "typescript",
    code: `useEffect(() => {
  const timer = setTimeout(() => {}, 1000)
  return () => clearTimeout(timer)
}, [])`,
    tags: ["react", "hooks", "typescript"],
    createdAt: new Date("2024-02-20"),
  },
  {
    id: 3,
    title: "Promise.all Pattern",
    language: "javascript",
    code: "const results = await Promise.all(promises.map(p => p()))",
    tags: ["javascript", "async", "promises"],
    createdAt: new Date("2024-03-10"),
  },
];

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>(initialSnippets);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newSnippet, setNewSnippet] = useState({
    title: "",
    language: "JavaScript",
    code: "",
    tags: "",
  });

  const handleCreateSnippet = () => {
    if (!newSnippet.title || !newSnippet.code) return;

    const snippet: Snippet = {
      id: Date.now(),
      title: newSnippet.title,
      language: newSnippet.language,
      code: newSnippet.code,
      tags: newSnippet.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      createdAt: new Date(),
    };

    // add to snippets array
    setSnippets([snippet, ...snippets]);

    // close modal and rest form
    setShowModal(false);
    setNewSnippet({
      title: "",
      language: "javascript",
      code: "",
      tags: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button onClick={() => setShowModal(true)}>+ New Snippet</Button>
        </div>

        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "0.5rem",
                width: "90%",
                maxWidth: "600px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Create New Snippet</h2>

              {/* Title Input */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Title
                </label>
                <input
                  type="text"
                  value={newSnippet.title}
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, title: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ddd",
                  }}
                  placeholder="My awesome snippet"
                />
              </div>

              {/* Language Select */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Language
                </label>
                <select
                  value={newSnippet.language}
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, language: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ddd",
                  }}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>

              {/* Code Textarea */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Code
                </label>
                <textarea
                  value={newSnippet.code}
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, code: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ddd",
                    fontFamily: "monospace",
                    minHeight: "150px",
                  }}
                  placeholder="console.log('Hello world')"
                />
              </div>

              {/* Tags Input */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "600",
                  }}
                >
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newSnippet.tags}
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, tags: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ddd",
                  }}
                  placeholder="javascript, array, functional"
                />
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowModal(false);
                    setNewSnippet({
                      title: "",
                      language: "javascript",
                      code: "",
                      tags: "",
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleCreateSnippet}>Create Snippet</Button>
              </div>
            </div>
          </div>
        )}

        {/* Snippet Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              title={snippet.title}
              language={snippet.language}
              code={snippet.code}
              tags={snippet.tags}
              createdAt={formatDate(snippet.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
