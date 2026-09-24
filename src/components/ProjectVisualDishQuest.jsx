import React from "react";
import { Utensils, Database, ShieldCheck, Server, Globe, Search, Heart, Code2 } from "lucide-react";

export default function ProjectVisualDishQuest() {
  return (
    <div className="project-visual-card visual-dishquest">
      <div className="visual-backdrop-glow" />

      {/* Visual Window Header */}
      <div className="visual-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="visual-window-title">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span>Full-Stack Platform • REST API</span>
        </div>
        <div className="visual-badge badge-emerald">
          <span className="badge-pulse emerald" />
          <span>MongoDB Connected</span>
        </div>
      </div>

      {/* Visual Body Graphic */}
      <div className="visual-body">
        {/* Full-Stack Architecture Node */}
        <div className="visual-arch-bar">
          <div className="arch-chip">
            <Code2 className="w-3 h-3 text-emerald-400" />
            <span>React.js</span>
          </div>
          <span className="arch-arrow">→</span>
          <div className="arch-chip">
            <Server className="w-3 h-3 text-emerald-400" />
            <span>Express.js</span>
          </div>
          <span className="arch-arrow">→</span>
          <div className="arch-chip">
            <Database className="w-3 h-3 text-emerald-400" />
            <span>MongoDB</span>
          </div>
        </div>

        {/* Recipe UI Card Preview Mockup */}
        <div className="visual-card-item card-recipe">
          <div className="recipe-img-placeholder">
            <Utensils className="w-6 h-6 text-emerald-400 opacity-80" />
            <div className="recipe-badge">
              <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400/30" />
              <span>Auth Protected</span>
            </div>
          </div>

          <div className="recipe-info">
            <div className="recipe-title-bar">
              <div className="skeleton-title" />
              <div className="skeleton-rating" />
            </div>

            <div className="recipe-tags">
              <span className="tag">Auth JWT</span>
              <span className="tag">REST API</span>
              <span className="tag">CRUD</span>
            </div>
          </div>
        </div>

        {/* REST API & Data Management Mockup */}
        <div className="visual-card-item card-api">
          <div className="api-endpoint-row">
            <span className="method-get">GET</span>
            <span className="endpoint-url">/api/v1/recipes/search</span>
            <span className="status-200">
              <ShieldCheck className="w-3 h-3 inline mr-1 text-emerald-400" />
              200 OK
            </span>
          </div>
          <div className="api-json-preview">
            <code>
              {`{ status: "success", count: 48, db: "MongoDB" }`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
