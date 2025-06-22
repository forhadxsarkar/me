import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function ForhadSarkarSite() {
  return (
    <main className="min-h-screen bg-white text-blue-800 p-6">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Md Forhad Sarkar</h1>
        <p className="text-lg">Managing Director | Brand Strategist | Business Enthusiast</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <p>
              I am a passionate professional with experience in brand development, strategic management,
              and leadership roles in the buying house industry. My goal is to drive brand growth and
              market innovation through actionable insights and consumer connection.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Managing Director</h3>
            <p className="mb-2">Sarkar & Co. Ltd | 2022 - Present</p>
            <ul className="list-disc list-inside">
              <li>Led sourcing and vendor negotiations to ensure quality and cost efficiency.</li>
              <li>Oversaw client communications and managed end-to-end project delivery.</li>
              <li>Developed long-term brand strategy and team coordination plans.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Pulse Energy Drink – Brand Key Analysis</h3>
            <p>
              Conducted an 8-element Brand Key model study for Pulse Energy Drink. Designed
              a strategic positioning based on market insight, consumer discrimination, and value proposition.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:forhadsarker935@gmail.com" className="underline">
              forhadsarker935@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <a href="https://www.linkedin.com/in/forhad-sarkar-a5596836b" target="_blank" className="underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
