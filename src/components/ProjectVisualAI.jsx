import React from "react";
import { Sparkles, FileText, Cpu, Database, Search, ArrowRight, Layers } from "lucide-react";

export default function ProjectVisualAI() {
  return (
    <div className="project-visual-card visual-ai">
      <div className="visual-backdrop-glow" />
      
      {/* Visual Window Header */}
      <div className="visual-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="visual-window-title">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>RAG Pipeline Architecture • FAISS Index</span>
        </div>
        <div className="visual-badge">
          <span className="badge-pulse" />
          <span>LLM Active</span>
        </div>
      </div>

      {/* Visual Body Graphic */}
      <div className="visual-body">
        {/* Document Vectorization Node */}
        <div className="visual-card-item card-doc">
          <div className="card-item-header">
            <FileText className="card-icon text-cyan-400" />
            <div>
              <h4>PDF Document Stream</h4>
              <p>Extract &amp; Chunk Text Data</p>
            </div>
          </div>
          <div className="doc-preview-bars">
            <div className="bar bar-1" />
            <div className="bar bar-2" />
            <div className="bar bar-3" />
          </div>
        </div>

        {/* Vector Search Connector */}
        <div className="visual-flow-connector">
          <div className="flow-line">
            <span className="flow-pulse" />
          </div>
          <div className="flow-pill">
            <Database className="w-3 h-3 text-purple-400" />
            <span>Sentence Transformers</span>
          </div>
        </div>

        {/* FAISS Vector Store Card */}
        <div className="visual-card-item card-faiss">
          <div className="card-item-header">
            <Layers className="card-icon text-purple-400" />
            <div>
              <h4>FAISS Vector Store</h4>
              <p>Dense Retrieval • 1536d</p>
            </div>
            <span className="tag-score">98.4% Match</span>
          </div>
          
          <div className="vector-grid">
            {[85, 42, 98, 65, 30, 92, 78, 54, 89, 61, 95, 73].map((val, idx) => (
              <div
                key={idx}
                className="vector-node"
                style={{
                  opacity: val / 100,
                  transform: `scale(${0.7 + (val / 300)})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* AI Query & Summarization UI Mockup */}
        <div className="visual-card-item card-query">
          <div className="query-input">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Context-Aware Q&amp;A Prompt</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-auto" />
          </div>
          <div className="query-response">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              RAG pipeline processed PDF document context. Summarization &amp; quiz generation ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
