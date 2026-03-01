import { useState } from "react";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState("idle");

  const startScan = () => {
    if (!repoUrl) {
      alert("Please enter a GitHub repository URL");
      return;
    }
    setStatus("running");
    setTimeout(() => setStatus("done"), 4500);
  };

  return (
    <div
      className="min-h-screen w-full text-white
      bg-gradient-to-br from-[#1b0036] via-[#020617] to-[#2a004f]"
    >
      {/* PAGE CONTAINER */}
      <div className="min-h-screen px-12 py-10 flex flex-col">
        {/* HEADER */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div
              className="h-14 w-14 rounded-2xl 
              bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 
              flex items-center justify-center 
              shadow-[0_0_25px_rgba(168,85,247,0.7)]"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 3v12a3 3 0 003 3h6"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="6" cy="3" r="2" fill="white" />
                <circle cx="15" cy="18" r="2" fill="white" />
              </svg>
            </div>

            <div>
              <h1 className="text-2xl font-bold">GitAgent</h1>
              <p className="text-sm text-gray-400">
                Autonomous GitHub Security Agent
              </p>
            </div>
          </div>

          <span className="text-sm text-purple-300">
            Agentic AI • Explainable • Secure
          </span>
        </header>

        {/* HERO + CONTROL (FULL VIEW HEIGHT) */}
        <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – HERO */}
          <div>
            <h2
              className="text-5xl font-extrabold leading-tight mb-6
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-indigo-400"
            >
              Autonomous AI
              <br />
              for GitHub Security
            </h2>

            <p className="text-xl text-gray-300 max-w-xl mb-6">
              GitAgent acts as an autonomous security engineer — understanding
              repositories, reasoning about vulnerabilities, deciding fixes,
              validating safety, and preparing pull requests independently.
            </p>

            <p className="text-gray-400 text-base max-w-xl">
              Instead of static dashboards, this system visualizes the internal
              reasoning and decision pipeline of an agentic AI.
            </p>
          </div>

          {/* RIGHT – RUN AGENT */}
          <div
            className="bg-[#020617] border border-purple-800/40 rounded-2xl p-10
            shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <h3 className="text-2xl font-semibold mb-5">
              Run Autonomous Agent
            </h3>

            <input
              type="text"
              placeholder="https://github.com/username/repository"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full p-4 text-lg rounded-lg bg-[#020617]
                border border-gray-600 focus:outline-none 
                focus:border-purple-500 mb-5"
            />

            <button
              onClick={startScan}
              className="w-full p-4 text-lg rounded-lg font-semibold
                bg-gradient-to-r from-purple-600 to-indigo-600
                hover:from-purple-700 hover:to-indigo-700 transition"
            >
              Launch Agent
            </button>

            {status !== "idle" && (
              <div className="mt-8 space-y-4 text-base">
                <StatusItem text="Cloning repository" active />
                <StatusItem text="Understanding code context" active />
                <StatusItem text="Detecting vulnerabilities" active />
                <StatusItem
                  text="Generating secure patches"
                  active={status === "done"}
                />
                <StatusItem
                  text="Preparing pull request"
                  active={status === "done"}
                />
              </div>
            )}
          </div>
        </section>

        {/* AGENT REASONING */}
        <section
          className="mt-20 bg-[#020617] border border-purple-800/40 rounded-2xl p-12
          shadow-[0_0_25px_rgba(168,85,247,0.25)]"
        >
          <h3 className="text-3xl font-bold mb-8">Agent Reasoning Flow</h3>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-300">
            <ReasonStep text="Analyzing repository structure and files" />
            <ReasonStep text="Identifying security-sensitive components" />
            <ReasonStep text="Matching known vulnerability patterns" />
            <ReasonStep text="Evaluating risk severity and exploitability" />
            <ReasonStep text="Selecting optimal fix strategy" />
            <ReasonStep text="Validating patch for logic preservation" />
          </ol>
        </section>

        {/* VULNERABILITY SCENARIOS */}
        <section
          className="mt-20 bg-[#020617] border border-purple-800/40 rounded-2xl p-12
          shadow-[0_0_25px_rgba(168,85,247,0.25)]"
        >
          <h3 className="text-3xl font-bold mb-8">
            Simulated Vulnerability Scenarios
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Scenario
              title="Hardcoded Secrets"
              desc="Sensitive API keys or tokens directly embedded in source code, leading to credential leakage."
            />
            <Scenario
              title="Insecure Input Handling"
              desc="Lack of proper validation or sanitization enabling injection-based attacks."
            />
            <Scenario
              title="Outdated Dependencies"
              desc="Third-party libraries with known CVEs and exploitable vulnerabilities."
            />
            <Scenario
              title="Weak Authentication Logic"
              desc="Improper credential handling, session fixation, or authorization flaws."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

/* COMPONENTS */

function ReasonStep({ text }) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="mt-2 h-3 w-3 rounded-full bg-purple-400 
        shadow-[0_0_8px_#a855f7]"
      />
      <span>{text}</span>
    </li>
  );
}

function StatusItem({ text, active }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-3 w-3 rounded-full ${
          active ? "bg-purple-400 shadow-[0_0_8px_#a855f7]" : "bg-gray-600"
        }`}
      />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function Scenario({ title, desc }) {
  return (
    <div className="border border-purple-800/30 rounded-xl p-6">
      <p className="font-semibold text-xl text-purple-300">{title}</p>
      <p className="text-lg text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
