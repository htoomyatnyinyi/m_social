"use client"

import * as React from "react"
import { Key, Plus, Copy, CheckCircle2, AlertTriangle, ShieldCheck, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type ApiKey = {
  id: string
  name: string
  key: string
  status: "Active" | "Testing"
  createdAt: string
  lastUsed: string
}

const initialKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production Gateway API",
    key: "sk_live_abc123def456ghi789",
    status: "Active",
    createdAt: "Oct 10, 2023",
    lastUsed: "2 hours ago",
  },
  {
    id: "2",
    name: "Development Testing Key",
    key: "sk_test_xyz987uvw654rst321",
    status: "Testing",
    createdAt: "Nov 05, 2023",
    lastUsed: "1 day ago",
  }
]

export default function ApiKeysPage() {
  const [keys, setKeys] = React.useState<ApiKey[]>(initialKeys)
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const handleCreateKey = () => {
    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: `New Key ${keys.length + 1}`,
      key: `sk_live_${Math.random().toString(36).substring(2, 15)}`,
      status: "Active",
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      lastUsed: "Never",
    }
    setKeys([newKey, ...keys])
  }

  const handleRevoke = (id: string) => {
    setKeys(keys.filter(k => k.id !== id))
  }

  const handleCopy = (id: string, keyVal: string) => {
    navigator.clipboard.writeText(keyVal)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API Keys</h1>
          <p className="text-muted-foreground mt-1">
            Manage your API keys for authenticating server-to-server requests.
          </p>
        </div>
        <Button className="shrink-0 gap-2" onClick={handleCreateKey}>
          <Plus className="w-4 h-4" />
          Create New Key
        </Button>
      </div>

      {/* Warning banner */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex gap-3 text-yellow-600 dark:text-yellow-500">
        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="text-sm leading-relaxed">
          <strong>Important:</strong> Do not share your API keys or expose them in client-side code (like mobile apps or frontend frameworks). Doing so could compromise your account.
        </div>
      </div>

      {/* Keys List */}
      <div className="bg-background border border-border/50 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Active Credentials
          </h3>
        </div>

        <div className="divide-y divide-border/50">
          
          {keys.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground flex flex-col items-center">
              <Key className="w-12 h-12 mb-4 opacity-20" />
              <p>No active API keys found.</p>
              <p className="text-sm mt-1">Create a new key to get started.</p>
            </div>
          ) : (
            keys.map((k) => (
              <div key={k.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/5 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{k.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      k.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {k.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Created on {k.createdAt} • Last used {k.lastUsed}</p>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="flex-1 md:w-64 bg-muted/30 border border-input rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-sm font-mono tracking-wider truncate mr-4">
                      {k.key.substring(0, 10)}••••••••••••{k.key.substring(k.key.length - 4)}
                    </span>
                    <button 
                      onClick={() => handleCopy(k.id, k.key)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      title="Copy to clipboard"
                    >
                      {copiedId === k.id ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => handleRevoke(k.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Revoke
                  </Button>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  )
}
