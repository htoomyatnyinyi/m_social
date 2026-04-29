import { Key, Plus, Copy, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ApiKeysPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API Keys</h1>
          <p className="text-muted-foreground mt-1">
            Manage your API keys for authenticating server-to-server requests.
          </p>
        </div>
        <Button className="shrink-0 gap-2">
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
          
          {/* Key Item 1 */}
          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/5 transition-colors">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Production Gateway API</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Created on Oct 10, 2023 • Last used 2 hours ago</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-64 bg-muted/30 border border-input rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-mono tracking-wider">sk_live_••••••••••••8a9f</span>
                <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0">
                Revoke
              </Button>
            </div>
          </div>

          {/* Key Item 2 */}
          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/5 transition-colors">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">Development Testing Key</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                  Testing
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Created on Nov 05, 2023 • Last used 1 day ago</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-64 bg-muted/30 border border-input rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-mono tracking-wider">sk_test_••••••••••••2b1c</span>
                <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0">
                Revoke
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
