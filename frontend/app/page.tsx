"use client";

import { Header, Footer } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { CodeEditor } from "@/components/editor/code-editor";
import { OutputBox } from "@/components/editor/output-box";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("# Write your code here\n");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Running code...\n");
    
    // TODO: Implement actual code execution logic
    // For now, simulate execution
    setTimeout(() => {
      setOutput("This is where the output of your code will appear.");
      setIsRunning(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 w-full flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col gap-6 p-6 max-w-[1600px] mx-auto w-full">
          {/* Text at the top */}
          <div className="px-4 pt-4">
            <p className="text-2xl md:text-3xl text-center">
              Do you remember life without AI? When we used to think for ourselves?
            </p>
          </div>

          {/* Two side-by-side components */}
          <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
            {/* Component 1: Code Editor */}
            <div className="w-full md:flex-[0.7] flex flex-col gap-4 min-h-0">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Code Editor</h2>
                <Button onClick={handleRun} disabled={isRunning}>
                  {isRunning ? "Running..." : "Run"}
                </Button>
              </div>
              <div className="flex-1 min-h-[400px] md:min-h-0">
                <CodeEditor
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  language="python"
                  height="100%"
                />
              </div>
            </div>

            {/* Component 2: Output Box */}
            <div className="w-full md:flex-[0.3] flex flex-col gap-4 min-h-0">
              <div className="hidden md:block h-[40px]"></div>
              <div className="flex-1 min-h-[300px] md:min-h-0">
                <OutputBox output={output} isRunning={isRunning} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

