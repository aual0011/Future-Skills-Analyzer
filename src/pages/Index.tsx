import { useState } from "react";
import { IndustrySelector } from "@/components/IndustrySelector";
import { TimeHorizonSelector } from "@/components/TimeHorizonSelector";
import { SkillsChart } from "@/components/SkillsChart";
import { InsightsPanel } from "@/components/InsightsPanel";

// Mock data - in a real app, this would come from an AI model
const getSkillsData = (industry: string, years: number) => {
  const baseSkills = {
    tech: [
      { skill: "AI/ML", demand: 85 },
      { skill: "Cloud Computing", demand: 80 },
      { skill: "Cybersecurity", demand: 75 },
      { skill: "Data Analytics", demand: 70 },
      { skill: "DevOps", demand: 65 },
    ],
    finance: [
      { skill: "Blockchain", demand: 80 },
      { skill: "Financial Analysis", demand: 75 },
      { skill: "Risk Management", demand: 70 },
      { skill: "Digital Banking", demand: 65 },
      { skill: "RegTech", demand: 60 },
    ],
    healthcare: [
      { skill: "Telemedicine", demand: 85 },
      { skill: "Health Informatics", demand: 80 },
      { skill: "Patient Care", demand: 75 },
      { skill: "Medical Research", demand: 70 },
      { skill: "Healthcare IT", demand: 65 },
    ],
  }[industry] || [];

  return baseSkills.map(skill => ({
    ...skill,
    demand: Math.min(100, skill.demand + (years * 5))
  }));
};

const getInsights = (industry: string, years: number) => {
  const baseInsights = {
    tech: [
      "AI and Machine Learning skills will be crucial",
      "Cloud expertise demand continues to rise",
      "Cybersecurity becomes increasingly critical",
    ],
    finance: [
      "Blockchain technology expertise will be essential",
      "Digital transformation skills are highly valued",
      "Risk management importance grows with complexity",
    ],
    healthcare: [
      "Telemedicine platforms knowledge is crucial",
      "Data-driven healthcare decisions become standard",
      "Digital health record management is essential",
    ],
  }[industry] || [];

  return baseInsights;
};

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("tech");
  const [timeHorizon, setTimeHorizon] = useState(3);

  const skillsData = getSkillsData(selectedIndustry, timeHorizon);
  const insights = getInsights(selectedIndustry, timeHorizon);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-900 sm:text-4xl">
            Future Skills Analyzer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Predict the most in-demand skills for your industry
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <IndustrySelector
            selectedIndustry={selectedIndustry}
            onSelectIndustry={setSelectedIndustry}
          />
          <TimeHorizonSelector
            value={timeHorizon}
            onChange={(values) => setTimeHorizon(values[0])}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <SkillsChart data={skillsData} />
          </div>
          <div>
            <InsightsPanel insights={insights} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;