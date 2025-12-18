"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Loader2, XCircle } from "lucide-react"

interface DatabaseConnectionSetupProps {
  onConnectionSaved: (connectionName: string) => void
}

export function DatabaseConnectionSetup({ onConnectionSaved }: DatabaseConnectionSetupProps) {
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<"success" | "error" | null>(null)
  const [connectionName, setConnectionName] = useState("")

  const handleTestConnection = () => {
    setTesting(true)
    setTestResult(null)

    setTimeout(() => {
      setTesting(false)
      setTestResult("success")
    }, 1500)
  }

  const handleSave = () => {
    if (connectionName) {
      onConnectionSaved(connectionName)
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Add Database Connection</CardTitle>
        <CardDescription>Connect to your database to start querying with natural language</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="connection-name">Connection Name</Label>
            <Input
              id="connection-name"
              placeholder="Production DB"
              value={connectionName}
              onChange={(e) => setConnectionName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="db-type">Database Type</Label>
            <Select defaultValue="postgres">
              <SelectTrigger id="db-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgres">PostgreSQL</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="oracle">Oracle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="host">Host</Label>
            <Input id="host" placeholder="localhost" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="port">Port</Label>
            <Input id="port" placeholder="5432" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="database">Database Name</Label>
          <Input id="database" placeholder="production_db" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="readonly_user" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </div>

        {testResult && (
          <div
            className={`flex items-center gap-2 rounded-lg border p-3 ${
              testResult === "success"
                ? "border-green-500/20 bg-green-500/10 text-green-500"
                : "border-red-500/20 bg-red-500/10 text-red-500"
            }`}
          >
            {testResult === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <div className="text-sm">
                  <div className="font-medium">Connection successful</div>
                  <div className="text-xs opacity-80">Latency: 45ms | PostgreSQL 15.2</div>
                </div>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4" />
                <div className="text-sm font-medium">Connection failed</div>
              </>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <Button onClick={handleTestConnection} variant="outline" disabled={testing}>
            {testing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Test Connection
          </Button>
          <Button
            onClick={handleSave}
            disabled={!testResult || testResult === "error"}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Save Connection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
