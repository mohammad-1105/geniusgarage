"use client";

import { Button } from "@geniusgarage/ui/button";
import { Card } from "@geniusgarage/ui/card";
import { SnippetCard } from "@geniusgarage/ui/snippet-card";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string;
}

const mockSnippets: Snippet[] = [
  {
    id: 1,
    title: "Debounce Function (JavaScript)",
    language: "javascript",
    tags: ["utility", "performance", "frontend"],
    createdAt: "2024-01-10T08:30:00.000Z",
    code: `function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`,
  },
  {
    id: 2,
    title: "Fetch API with Error Handling",
    language: "javascript",
    tags: ["api", "async", "error-handling"],
    createdAt: "2024-01-15T10:00:00.000Z",
    code: `async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(\`HTTP error! status: \${res.status}\`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}`,
  },
  {
    id: 3,
    title: "Express Middleware Logger",
    language: "javascript",
    tags: ["backend", "express", "middleware"],
    createdAt: "2024-01-20T12:15:00.000Z",
    code: `function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next();
}

app.use(logger);`,
  },
  {
    id: 4,
    title: "React useEffect Example",
    language: "tsx",
    tags: ["react", "hooks", "frontend"],
    createdAt: "2024-02-01T09:45:00.000Z",
    code: `import { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
  },
  {
    id: 5,
    title: "TypeScript Utility Type (Partial Deep)",
    language: "typescript",
    tags: ["typescript", "types", "utility"],
    createdAt: "2024-02-10T14:20:00.000Z",
    code: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};`,
  },
  {
    id: 6,
    title: "MongoDB Query Example",
    language: "javascript",
    tags: ["database", "mongodb", "backend"],
    createdAt: "2024-02-18T16:00:00.000Z",
    code: `const users = await db.collection("users").find({
  age: { $gte: 18 },
  isActive: true
}).toArray();`,
  },
  {
    id: 7,
    title: "Python: List Comprehension",
    language: "python",
    tags: ["python", "basics"],
    createdAt: "2024-03-01T07:10:00.000Z",
    code: `squares = [x * x for x in range(10)]
print(squares)`,
  },
  {
    id: 8,
    title: "CSS Flex Centering",
    language: "css",
    tags: ["css", "layout", "frontend"],
    createdAt: "2024-03-05T11:25:00.000Z",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
  },
  {
    id: 9,
    title: "SQL: Get Recent Records",
    language: "sql",
    tags: ["sql", "database"],
    createdAt: "2024-03-10T13:50:00.000Z",
    code: `SELECT *
FROM orders
ORDER BY created_at DESC
LIMIT 10;`,
  },
  {
    id: 10,
    title: "JWT Verify Middleware",
    language: "javascript",
    tags: ["auth", "jwt", "backend"],
    createdAt: "2024-03-15T18:05:00.000Z",
    code: `import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(403);
  }
}`,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto"></div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">My Snippets</h1>
        <Button onClick={() => console.log("snippet created")}>
          + New snippet
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockSnippets.map((snippet) => (
          <SnippetCard
            key={snippet.id}
            title={snippet.title}
            language={snippet.language}
            code={snippet.code}
            tags={snippet.tags}
            createdAt={snippet.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
