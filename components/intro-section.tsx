"use client"

import { CheckCircle2, Database, Languages, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface IntroSectionProps {
  onConnect: () => void
}

export function IntroSection({ onConnect }: IntroSectionProps) {
  const features = [
    {
      icon: Languages,
      title: "Natural Language → SQL",
      description: "Ask questions in plain English, हिंदी, or regional languages",
    },
    {
      icon: Shield,
      title: "Safe, Read-Only Queries",
      description: "All queries are read-only by default. Your data stays protected.",
    },
    {
      icon: TrendingUp,
      title: "Tables and Charts",
      description: "Get instant visualizations with sortable tables and auto-generated charts",
    },
    {
      icon: Database,
      title: "Multi-Database Support",
      description: "Works with PostgreSQL, MySQL, Oracle, and more",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">
          DiveSQL — Query your data without writing SQL
        </h1>
        <p className="max-w-3xl text-balance text-lg text-muted-foreground">
          Built in India, for Indian startups and MSMEs. Ask questions in natural language and get trusted SQL answers.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span>Ask in plain English. Get SQL-powered insights.</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-border bg-card">
            <CardContent className="p-6">
              <feature.icon className="mb-3 h-8 w-8 text-indigo-500" />
              <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 to-purple-950/20">
        <CardContent className="p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-foreground">Ready to get started?</h3>
          <p className="mb-4 text-muted-foreground">Connect a database to start querying with natural language</p>
          <Button onClick={onConnect} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Database className="mr-2 h-4 w-4" />
            Connect a Database
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
