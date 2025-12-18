import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function SettingsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your workspace settings and preferences</p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Query Settings</CardTitle>
          <CardDescription>Configure how queries are executed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Read-only mode</Label>
              <p className="text-sm text-muted-foreground">Only allow SELECT queries</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-save queries</Label>
              <p className="text-sm text-muted-foreground">Automatically save query history</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show SQL preview</Label>
              <p className="text-sm text-muted-foreground">Display generated SQL by default</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Workspace</CardTitle>
          <CardDescription>Manage workspace settings and team members</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Workspace Name</Label>
            <div className="text-sm text-foreground">Acme Corp</div>
          </div>
          <div className="space-y-2">
            <Label>Team Members</Label>
            <div className="text-sm text-muted-foreground">3 active members</div>
          </div>
          <Button variant="outline">Manage Team</Button>
        </CardContent>
      </Card>

      <Card className="border-red-500/20 bg-card">
        <CardHeader>
          <CardTitle className="text-red-500">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">Delete Workspace</Button>
        </CardContent>
      </Card>
    </div>
  )
}
