"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Copy, Save, ChevronDown, ChevronRight } from "lucide-react"
import { SchemaBrowser } from "@/components/schema-browser"
import { Badge } from "@/components/ui/badge"

export function QueryWorkspace() {
  const [query, setQuery] = useState("")
  const [showSQL, setShowSQL] = useState(false)
  const [hasResults, setHasResults] = useState(false)

  const sampleData = [
    { city: "Bangalore", revenue: "₹12.4L", orders: 234, growth: "+18%" },
    { city: "Mumbai", revenue: "₹18.7L", orders: 412, growth: "+22%" },
    { city: "Delhi", revenue: "₹15.2L", orders: 328, growth: "+15%" },
    { city: "Chennai", revenue: "₹9.8L", orders: 187, growth: "+12%" },
    { city: "Pune", revenue: "₹7.6L", orders: 156, growth: "+9%" },
  ]

  const handleRunQuery = () => {
    setHasResults(true)
    setShowSQL(true)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <SchemaBrowser />

      <div className="space-y-6">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Ask a question</h2>
              <Badge variant="outline" className="text-xs">
                Ask in English, हिंदी, తెలుగు, தமிழ்...
              </Badge>
            </div>

            <Textarea
              placeholder="What was last month's revenue by city?&#10;पिछले महीने की revenue कितनी थी?&#10;Show top 10 customers by spend"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[120px] resize-none font-mono text-sm"
            />

            <div className="mt-4 flex items-center gap-2">
              <Button onClick={handleRunQuery} className="bg-indigo-600 hover:bg-indigo-700">
                <Play className="mr-2 h-4 w-4" />
                Run Query
              </Button>
              <Button variant="outline" size="icon">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {hasResults && (
          <>
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <Tabs defaultValue="table">
                  <TabsList>
                    <TabsTrigger value="table">Table</TabsTrigger>
                    <TabsTrigger value="chart">Chart</TabsTrigger>
                  </TabsList>

                  <TabsContent value="table" className="mt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="pb-3 text-left font-semibold text-foreground">City</th>
                            <th className="pb-3 text-left font-semibold text-foreground">Revenue</th>
                            <th className="pb-3 text-left font-semibold text-foreground">Orders</th>
                            <th className="pb-3 text-left font-semibold text-foreground">Growth</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sampleData.map((row, i) => (
                            <tr key={i} className="border-b border-border/50">
                              <td className="py-3 text-foreground">{row.city}</td>
                              <td className="py-3 font-mono text-muted-foreground">{row.revenue}</td>
                              <td className="py-3 text-muted-foreground">{row.orders}</td>
                              <td className="py-3 text-green-500">{row.growth}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="chart" className="mt-4">
                    <div className="space-y-4">
                      {sampleData.map((row, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-foreground">{row.city}</span>
                            <span className="font-mono text-muted-foreground">{row.revenue}</span>
                          </div>
                          <div className="h-8 overflow-hidden rounded-lg bg-muted">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                              style={{ width: `${(i + 1) * 15 + 20}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-4">
                <button
                  onClick={() => setShowSQL(!showSQL)}
                  className="flex w-full items-center justify-between text-sm font-semibold text-foreground"
                >
                  <span>Generated SQL</span>
                  {showSQL ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>

                {showSQL && (
                  <div className="mt-4 space-y-3">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Read-only
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Limited 1000 rows
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Safe execution
                      </Badge>
                    </div>

                    <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs text-foreground">
                      {`SELECT 
  city,
  SUM(revenue) as total_revenue,
  COUNT(order_id) as total_orders,
  CONCAT('+', ROUND((SUM(revenue) / LAG(SUM(revenue)) OVER (ORDER BY month) - 1) * 100), '%') as growth
FROM orders
WHERE date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
  AND date < DATE_TRUNC('month', CURRENT_DATE)
GROUP BY city
ORDER BY total_revenue DESC
LIMIT 1000;`}
                    </pre>

                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Copy className="h-3 w-3" />
                      Copy SQL
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
