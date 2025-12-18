import { DatabaseConnectionSetup } from "@/components/database-connection-setup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, MoreVertical } from "lucide-react"

interface ConnectionsSectionProps {
  onConnectionSaved: (name: string) => void
}

export function ConnectionsSection({ onConnectionSaved }: ConnectionsSectionProps) {
  const existingConnections = [
    { name: "Production DB", type: "PostgreSQL", status: "active", lastUsed: "2 min ago" },
    { name: "Analytics DB", type: "MySQL", status: "active", lastUsed: "1 hour ago" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Database Connections</h1>
        <p className="mt-1 text-muted-foreground">Manage your database connections</p>
      </div>

      <DatabaseConnectionSetup onConnectionSaved={onConnectionSaved} />

      {existingConnections.length > 0 && (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base">Existing Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {existingConnections.map((conn, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Database className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{conn.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {conn.type} • Last used {conn.lastUsed}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-green-500">
                      {conn.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
