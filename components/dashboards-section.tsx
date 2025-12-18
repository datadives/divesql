import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Plus, TrendingUp } from "lucide-react"

export function DashboardsSection() {
  const dashboards = [
    {
      title: "Monthly Revenue",
      description: "Revenue breakdown by city and category",
      queries: 3,
      lastUpdated: "2 hours ago",
    },
    {
      title: "Customer Insights",
      description: "Top customers and retention metrics",
      queries: 5,
      lastUpdated: "1 day ago",
    },
    {
      title: "Product Performance",
      description: "Best selling products and trends",
      queries: 4,
      lastUpdated: "3 hours ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboards</h1>
          <p className="mt-1 text-muted-foreground">Save and organize your frequent queries</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="mr-2 h-4 w-4" />
          New Dashboard
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dashboards.map((dashboard, index) => (
          <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">{dashboard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{dashboard.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{dashboard.queries} queries</span>
                <span>{dashboard.lastUpdated}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-base">KPI Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Total Revenue</div>
              <div className="text-2xl font-bold text-foreground">₹63.7L</div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp className="h-3 w-3" />
                <span>+15.3%</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Total Orders</div>
              <div className="text-2xl font-bold text-foreground">1,317</div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp className="h-3 w-3" />
                <span>+12.7%</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Active Cities</div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-xs text-muted-foreground">Across India</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
