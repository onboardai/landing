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
} from "lucide-react";
import { Poppins } from "next/font/google";
import logo from "./logo.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

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
      question: "How quickly can I deploy AI agents in my organization?",
      answer:
        "Most organizations can deploy their first AI agents within 24-48 hours. Our streamlined onboarding process includes pre-built templates, automated setup, and dedicated support to ensure rapid deployment. Enterprise customers typically see full implementation across departments within 1-2 weeks.",
    },
    {
      question:
        "What level of customization is available for enterprise clients?",
      answer:
        "Enterprise clients receive full customization capabilities including custom AI model training, branded interfaces, specialized workflows, API integrations, and dedicated infrastructure. Our enterprise team works closely with your technical staff to ensure the platform meets your specific requirements and compliance standards.",
    },
    {
      question: "How does OnboardAI ensure data security and compliance?",
      answer:
        "We maintain SOC 2 Type II certification, GDPR compliance, and enterprise-grade security measures including end-to-end encryption, role-based access controls, audit logging, and data residency options. All data processing follows strict privacy protocols with optional on-premises deployment for maximum security.",
    },
    {
      question: "What kind of ROI can I expect from AI automation?",
      answer:
        "Our customers typically see 300-500% ROI within the first year through reduced operational costs, increased productivity, and improved accuracy. Common benefits include 60% reduction in manual tasks, 40% faster response times, and 25% increase in customer satisfaction scores.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes, we provide comprehensive training including live onboarding sessions, video tutorials, documentation, and hands-on workshops. Ongoing support includes 24/7 technical assistance, regular check-ins with your success manager, quarterly business reviews, and access to our knowledge base and community forums.",
    },
    {
      question: "Can I integrate OnboardAI with my existing tools?",
      answer:
        "Absolutely. OnboardAI integrates with 200+ popular business tools including CRM systems (Salesforce, HubSpot), communication platforms (Slack, Teams), project management tools (Asana, Jira), and custom APIs. Our integration team can help set up custom connections for your specific tech stack.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 ${poppins.className}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="OnboardAI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="hidden lg:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Platform
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Resources
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>
            <button
              className="md:hidden"
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
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              AI Agents
            </span>
            <br />
            <span className="text-gray-900">for Enterprise</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-normal">
            Deploy intelligent AI agents across your organization. Automate
            complex workflows, enhance productivity, and scale operations with
            enterprise-grade AI automation.
          </p>

          <div className="flex justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8">
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
      </section>

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
              Transform your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                entire workflow
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-normal">
              Deploy enterprise-grade AI agents that integrate seamlessly with
              your existing systems and scale with your business
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

                    <div className="inline-flex items-center justify-center text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-2 border border-blue-100">
                      <Sparkles className="w-3 h-3 mr-2" />
                      {category.agents}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
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
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="text-2xl text-blue-100 mb-16 max-w-3xl mx-auto font-normal">
            Join thousands of enterprise customers who trust OnboardAI to
            automate their most critical workflows.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
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
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">
                      {item.question}
                    </span>
                    <ChevronRight
                      className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                        expandedFaq === index ? "rotate-90" : ""
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                OnboardAI
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed font-normal">
                The enterprise AI automation platform trusted by industry
                leaders to transform their operations and scale intelligently.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Platform
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    AI Agents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Automation Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Integration Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Enterprise Console
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Solutions
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Sales Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Marketing Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    HR Operations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Financial Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Press & Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Partner Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors font-normal"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-normal">All systems operational</span>
              </div>
              <div className="text-gray-400 text-sm font-normal">
                © 2024 OnboardAI. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
