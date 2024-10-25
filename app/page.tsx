import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Scale, Shield, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI Fairness Testing Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Evaluate and ensure the fairness of your AI models through comprehensive testing and analysis
          </p>
          <Link href="/test">
            <Button size="lg" className="gap-2">
              Start Testing <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Model Analysis</h3>
            <p className="text-muted-foreground">
              Deep analysis of AI model behavior across different demographic groups
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bias Detection</h3>
            <p className="text-muted-foreground">
              Identify potential biases in your AI models through systematic testing
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair AI Guidelines</h3>
            <p className="text-muted-foreground">
              Comprehensive recommendations to improve model fairness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}