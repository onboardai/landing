"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronRight,
  Sparkles,
  Rocket,
  Megaphone,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Workflow,
  Smile,
  Palette,
  Target,
  Activity,
  Brain,
  Telescope,
  Volume2,
  Layers,
  Check,
  Zap,
  ChartNoAxesCombined,
  Headset,
  Wrench,
  ShieldBan,
  Mail,
  Users,
  Search,
  CheckCircle,
  FileText
} from "lucide-react";

import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
})

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const departments = [
    {
      icon: Rocket,
      name: "Sales",
      agents: "12 agents",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Megaphone,
      name: "Marketing",
      agents: "8 agents",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      name: "Finance",
      agents: "6 agents",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      name: "Human Resources",
      agents: "4 agents",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      name: "Research",
      agents: "7 agents",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      name: "Customer Support",
      agents: "10 agents",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Workflow,
      name: "Operations",
      agents: "5 agents",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const employee = [
    {
      name: "Sales",
      icon: ChartNoAxesCombined,
      bullet1: "SDR AI Rep",
      bullet2: "Lead Nurturer",
      bullet3: "CRM Updater",
      color: "from-orange-500 to-red-500 "
    },
    {
      name: "Customer Support",
      icon: Headset,
      bullet1: "Ticket Handler",
      bullet2: "Live Chat AI",
      bullet3: "Email Responder",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Operations",
      icon: Wrench,
      bullet1: "Data Entry Assistant",
      bullet2: "Internal Coordinator",
      bullet3: "Task Scheduler",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "HR & Admin",
      icon: ShieldBan,
      bullet1: "Recruitment Screener",
      bullet2: "Interview Setter",
      bullet3: "Virtual Office Manager",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Marketing",
      icon: Mail,
      bullet1: "Outreach AI",
      bullet2: "Campaign Assistant",
      bullet3: "Research Analyst",
      color: "from-pink-500 to-rose-500",
    }
  ]

  const agentCategories = [
    {
      name: "Customer Support",
      icon: Smile,
      description: "AI-powered customer service automation",
      agents: "15+ agents",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Content Creation",
      icon: Palette,
      description: "Automated content generation and optimization",
      agents: "12+ agents",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Lead Generation",
      icon: Target,
      description: "Intelligent prospect identification and outreach",
      agents: "18+ agents",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Business Analytics",
      icon: Activity,
      description: "Data analysis and business intelligence",
      agents: "8+ agents",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "AI Chatbot",
      icon: Brain,
      description: "Conversational AI for websites and apps",
      agents: "22+ agents",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Marketing Research",
      icon: Telescope,
      description: "Market analysis and competitor intelligence",
      agents: "10+ agents",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Voice Assistant",
      icon: Volume2,
      description: "Voice-activated AI for calls and meetings",
      agents: "6+ agents",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "More Solutions",
      icon: Layers,
      description: "Explore additional AI automation tools",
      agents: "50+ agents",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const featuredAgents = [
    {
      title: "Call Assistant AI Agent",
      category: "Customer Support",
      description:
        "Automate customer service calls with our AI agent that handles inquiries, schedules appointments, and provides support.",
      rating: 4.9,
      reviews: 234,
      price: "From $99/mo",
      badge: "Popular",
    },
    {
      title: "Lead Generation Automation",
      category: "Sales",
      description:
        "Generate high-quality leads automatically with advanced AI targeting and personalized outreach campaigns.",
      rating: 4.8,
      reviews: 189,
      price: "From $149/mo",
      badge: "Trending",
    },
    {
      title: "Technical Processing Assistant",
      category: "Operations",
      description:
        "Streamline technical workflows with AI-powered processing, analysis, and automated decision making.",
      rating: 4.9,
      reviews: 156,
      price: "From $199/mo",
      badge: "Enterprise",
    },
    {
      title: "Recruiter AI Assistant",
      category: "Human Resources",
      description:
        "Streamline your hiring process with intelligent candidate screening, interview scheduling, and talent matching.",
      rating: 4.7,
      reviews: 98,
      price: "From $129/mo",
      badge: "New",
    },
  ];

  const stats = [
    {
      value: "98%",
      label: "Customer Satisfaction",
      description: "Based on 10,000+ reviews",
    },
    {
      value: "5x",
      label: "Faster Deployment",
      description: "Compared to traditional solutions",
    },
    {
      value: "50K+",
      label: "AI Agents Deployed",
      description: "Across enterprise customers",
    },
  ];

  const features = [
    "Enterprise-grade security & compliance",
    "24/7 dedicated support team",
    "Custom AI agent development",
    "Advanced analytics & reporting",
    "Seamless integrations",
    "Scalable infrastructure",
  ];

  const faqItems = [
    {
      question: "What is OnboardAI?",
      answer:
        "OnboardAI is the AI workforce platform that helps businesses hire, manage, and scale with AI employees.",
    },
    {
      question:
        "What are AI employees?",
      answer:
        "AI employees are advanced AI systems built to autonomously execute job functions like sales outreach, support, operations, and more  -just like a human teammate.",
    },
    {
      question: "Who provides the AI employees on OnboardAI?",
      answer:
        "Our partnered AI developers and agencies list their most capable agents on OnboardAI, offering businesses a vetted, job-ready AI workforce.",
    },
    {
      question: "Can I manage my AI employees through OnboardAI?",
      answer:
        "Very soon. We’re actively building an AI HRM platform to help you track performance, outcomes, and manage your AI workforce in one place.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes, we provide comprehensive training. Ongoing support includes 24/7 technical assistance, regular check-ins with your success manager, quarterly business reviews, and access to our knowledge base and community forums.",
    },
    {
      question: "What kind of ROI can I expect from AI automation?",
      answer:
        "Our customers see 3–5× ROI in the first year, with 60% fewer manual tasks, 40% faster responses, and a 25% boost in customer satisfaction.",
    },
    {
      question: "How quickly can I deploy AI employees in my organization?",
      answer:
        "Deployment usually takes less than 48 hours, depending on your tech stack and the AI employee selected.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Providers list AI employees",
      description:
        "AI developers and agencies showcase their job-ready AI employees, organized by department and role.",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      number: "02",
      title: "Businesses search employees or post jobs",
      description:
        "Businesses either browse the available AI employees or post hiring jobs tailored to specific needs.",
      icon: Search,
      color: "bg-purple-500",
    },
    {
      number: "03",
      title: "Mutual selection & agreement",
      description:
        "Businesses and providers review each other's needs, confirm alignment, and move forward with the hire.",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      number: "04",
      title: "Contract through OnboardAI",
      description: "OnboardAI facilitates a smooth hiring agreement and manages the handoff and tracking from day one.",
      icon: FileText,
      color: "bg-orange-500",
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 ${inter.className}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-3">
                <Image
                  src="/log.png"
                  alt="OnboardAI Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="hidden lg:flex space-x-8">
                <a
                  href="https://tally.so/r/wL4OZp"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Hire AI Employees
                </a>
                <a
                  href="https://tally.so/r/wL4OZp"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Apply as Provider
                </a>
                <a
                  href="https://tally.so/r/wL4OZp"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Join Waitlist
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=team@theonboardai.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="https://tally.so/r/wL4OZp">
                  Hire now
                </Link>
              </Button>
            </div>
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100">
          <div className="flex flex-col px-6 py-6 space-y-4 text-sm font-medium text-gray-700">
            <a
              href="https://tally.so/r/wL4OZp"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire AI Employees
            </a>
            <a
              href="https://tally.so/r/wL4OZp"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply as Provider
            </a>
            <a
              href="https://tally.so/r/wL4OZp"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=team@theonboardai.com"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="https://tally.so/r/wL4OZp">
                  Hire now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}


      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-sm">
              Next-Generation AI Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
            <span className="text-gray-900">Hire Your First</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              AI Employee
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-normal">
            The world’s first AI employee hiring platform. Deploy intelligent AI employees across your organization.
          </p>

          <div className="flex justify-center mb-16">
            <Button
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              <Link href="https://tally.so/r/wL4OZp">
                Start now
              </Link>
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              GDPR Ready
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Enterprise Security
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 font-normal">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Departments Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              AI solutions for every
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                department
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-normal">
              Purpose-built AI agents designed to transform how every team in
              your organization operates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {departments.slice(0, 4).map((dept, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer hover:-translate-y-2"
              >
                <CardContent className="p-10 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} p-4 mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-xl`}
                  >
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{dept.agents}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.slice(4).map((dept, index) => (
              <Card
                key={index + 4}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer hover:-translate-y-2"
              >
                <CardContent className="p-10 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} p-4 mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-xl`}
                  >
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{dept.agents}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold text-sm">
                COMPREHENSIVE AUTOMATION SUITE
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Elevate your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                entire workflow
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-normal">
              Transform how every team in your organization operates with your next AI hire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agentCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-lg hover:bg-white hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                <CardContent className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} p-5 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed font-normal">
                      {category.description}
                    </p>

                    {/* <div className="inline-flex items-center justify-center text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-2 border border-blue-100">
                      <Sparkles className="w-3 h-3 mr-2" />
                      {category.agents}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              AI Employees for
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Every Job
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-normal">
              Hire AI employees trained specifically for the job you need done.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {employee.map((e, index) => (
              <Card
                key={index}
                className="w-[300px] group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-lg hover:bg-white hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                <CardContent className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${e.color} p-5 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <e.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {e.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed font-normal">
                      • {e.bullet1}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed font-normal">
                      • {e.bullet2}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed font-normal">
                      • {e.bullet3}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We enable seamless AI hiring between businesses and AI employee providers.
            </p>
          </div>

          {/* Visual Bridge */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center space-x-4 sm:space-x-8">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">AI Providers</h3>
                  <p className="text-sm text-gray-600">Showcase AI employees</p>
                </div>

                <div className="flex items-center justify-center px-4">
                  <div className="flex items-center">
                    <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <div className="mx-2 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    </div>
                    <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Search className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Businesses</h3>
                  <p className="text-sm text-gray-600">Find AI talent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Flow */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 mb-1">Step {step.number}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 left-full transform -translate-y-1/2 justify-center items-center w-8 z-20">
                    <div className="bg-white rounded-full p-1 shadow-sm">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                )}

                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden relative z-20 -my-4">
                    <div className="flex justify-center items-center py-8">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-gray-400"></div>
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-3 shadow-lg">
                          <ArrowRight className="w-5 h-5 text-white rotate-90" />
                        </div>
                        <div className="w-px h-6 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using OnboardAI to find their perfect AI employees.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div> */}
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                Built for
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  enterprise scale
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-normal">
                OnboardAI provides the security, reliability, and scalability
                that enterprise organizations demand.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 mr-4 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {featuredAgents.map((agent, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 font-medium">
                        {agent.badge}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{agent.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg leading-tight">
                      {agent.title}
                    </h3>
                    <p className="text-sm text-blue-600 mb-3 font-medium">
                      {agent.category}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">
                        {agent.price}
                      </span>
                      <span className="text-xs text-gray-500 font-normal">
                        {agent.reviews} reviews
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main CTA Container */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-60"></div>

              {/* Floating decorative elements - hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block absolute top-8 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="hidden md:block absolute top-16 right-16 lg:top-20 lg:right-20 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-30"></div>
              <div className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full opacity-25"></div>
              <div className="hidden md:block absolute bottom-16 left-16 lg:bottom-20 lg:left-20 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full opacity-40"></div>

              <div className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 sm:mb-8 border border-blue-200">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">
                      REVOLUTIONARY AI WORKFORCE
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                    The Future of{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Workforce
                    </span>{" "}
                    Is Here.
                  </h2>

                  {/* Copy */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-2 sm:px-0">
                    OnboardAI makes it effortless for businesses to build an AI-augmented workforce by delegating real
                    jobs to AI employees.
                  </p>

                  {/* CTA Button */}
                  <div className="flex justify-center px-4 sm:px-0">
                    <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-4 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg lg:text-xl shadow-lg w-full sm:w-auto justify-center">
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>

                      <Link href="https://tally.so/r/wL4OZp" className="relative">Hire My AI Employee Now</Link>
                      <ArrowRight className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Subtle call-out text */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 font-medium px-4 sm:px-0">
                    Join thousands of forward-thinking businesses • No setup fees • Start in minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Frequently asked
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-normal">
              Everything you need to know about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
              >
                <CardContent className="p-0">
                  <button
                    className="cursor-pointer w-full p-8 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">
                      {item.question}
                    </span>
                    <ChevronRight
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${expandedFaq === index ? "rotate-90" : ""
                        }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed font-normal">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-6 mb-16 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              OnboardAI
            </div>
            <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-base font-normal">
              <li>
                <a href="https://tally.so/r/wL4OZp" className="hover:text-blue-400 transition-colors">Hire AI Employees</a>
              </li>
              <li>
                <a href="https://tally.so/r/wL4OZp" className="hover:text-blue-400 transition-colors">Apply as Provider</a>
              </li>
              <li>
                <a href="https://tally.so/r/wL4OZp" className="hover:text-blue-400 transition-colors">Join Waitlist</a>
              </li>
              <li>
                <a href="https://tally.so/r/wL4OZp" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-gray-400 text-sm font-normal">
                © 2025 OnboardAI. The Future Workforce, Today.
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Page;
