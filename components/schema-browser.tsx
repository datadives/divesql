"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronRight, Database, Table2, Type } from "lucide-react"

export function SchemaBrowser() {
  const [expandedSchemas, setExpandedSchemas] = useState<string[]>(["public"])
  const [expandedTables, setExpandedTables] = useState<string[]>(["orders"])
  const [searchQuery, setSearchQuery] = useState("")

  const schemas = [
    {
      name: "public",
      tables: [
        {
          name: "orders",
          columns: [
            { name: "order_id", type: "integer", nullable: false },
            { name: "customer_id", type: "integer", nullable: false },
            { name: "city", type: "varchar(100)", nullable: false },
            { name: "revenue", type: "decimal(10,2)", nullable: false },
            { name: "date", type: "timestamp", nullable: false },
          ],
        },
        {
          name: "customers",
          columns: [
            { name: "customer_id", type: "integer", nullable: false },
            { name: "name", type: "varchar(255)", nullable: false },
            { name: "email", type: "varchar(255)", nullable: true },
          ],
        },
      ],
    },
  ]

  const toggleSchema = (schemaName: string) => {
    setExpandedSchemas((prev) =>
      prev.includes(schemaName) ? prev.filter((s) => s !== schemaName) : [...prev, schemaName],
    )
  }

  const toggleTable = (tableName: string) => {
    setExpandedTables((prev) => (prev.includes(tableName) ? prev.filter((t) => t !== tableName) : [...prev, tableName]))
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Database Schema</CardTitle>
        <Input
          placeholder="Search tables or columns"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-2"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        {schemas.map((schema) => (
          <div key={schema.name} className="space-y-1">
            <button
              onClick={() => toggleSchema(schema.name)}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              {expandedSchemas.includes(schema.name) ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              <Database className="h-3 w-3 text-indigo-500" />
              <span className="font-medium text-foreground">{schema.name}</span>
            </button>

            {expandedSchemas.includes(schema.name) && (
              <div className="ml-4 space-y-1">
                {schema.tables.map((table) => (
                  <div key={table.name} className="space-y-1">
                    <button
                      onClick={() => toggleTable(table.name)}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                    >
                      {expandedTables.includes(table.name) ? (
                        <ChevronDown className="h-3 w-3" />
                      ) : (
                        <ChevronRight className="h-3 w-3" />
                      )}
                      <Table2 className="h-3 w-3 text-purple-500" />
                      <span className="text-foreground">{table.name}</span>
                    </button>

                    {expandedTables.includes(table.name) && (
                      <div className="ml-4 space-y-0.5">
                        {table.columns.map((column) => (
                          <div
                            key={column.name}
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-xs hover:bg-accent"
                          >
                            <Type className="h-3 w-3 text-muted-foreground" />
                            <span className="flex-1 text-muted-foreground">{column.name}</span>
                            <span className="font-mono text-[10px] text-muted-foreground/60">{column.type}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
