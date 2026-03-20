import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // ===== FRONTEND =====
  { name: "HTML5", level: 85, category: "frontend" },
  { name: "CSS3", level: 80, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.js", level: 75, category: "frontend" },

  // ===== BACKEND =====
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 78, category: "backend" },

  // ===== DATABASE =====
  { name: "MongoDB", level: 75, category: "database" },
  { name: "MySQL", level: 82, category: "database" },
  { name: "SQL", level: 85, category: "database" },

  // ===== PROGRAMMING LANGUAGES =====
  { name: "C++", level: 80, category: "tools" },
  { name: "Java", level: 75, category: "tools" },

  // ===== TOOLS =====
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Skill Name */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};