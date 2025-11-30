"use client";

interface OutputBoxProps {
  output: string;
  isRunning?: boolean;
}

export function OutputBox({ output, isRunning = false }: OutputBoxProps) {
  return (
    <div className="w-full h-full border rounded-lg bg-card p-4 flex flex-col dark:border-[#EFF6E0]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-foreground">Output</h3>
        {isRunning && (
          <span className="text-xs text-muted-foreground">Running...</span>
        )}
      </div>
      <div className="flex-1 overflow-auto">
        <pre className="text-sm font-mono whitespace-pre-wrap break-words text-foreground">
          {output || "No output yet. Click 'Run' to execute your code."}
        </pre>
      </div>
    </div>
  );
}

