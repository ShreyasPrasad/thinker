"use client";

import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: string;
  height?: string;
}

export function CodeEditor({
  value,
  onChange,
  language = "javascript",
  height = "100%",
}: CodeEditorProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-card border rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading editor...</p>
      </div>
    );
  }

  const editorTheme = theme === "dark" ? "vs-dark" : "light";

  return (
    <div className="w-full h-full border rounded-lg overflow-hidden">
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={onChange}
        theme={editorTheme}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

