import { Search, Filter, MoreHorizontal, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const mockUsers = [
  { id: "1", name: "Kyaw Kyaw", email: "kyaw@example.com.mm", role: "User", status: "Active", joined: "Oct 24, 2023" },
  { id: "2", name: "Su Su", email: "susu@example.com.mm", role: "Admin", status: "Active", joined: "Oct 22, 2023" },
  { id: "3", name: "Aung Aung", email: "aung@example.com.mm", role: "User", status: "Inactive", joined: "Oct 20, 2023" },
  { id: "4", name: "Mya Mya", email: "mya@example.com.mm", role: "Beta Tester", status: "Active", joined: "Oct 19, 2023" },
  { id: "5", name: "Zaw Zaw", email: "zaw@example.com.mm", role: "User", status: "Active", joined: "Oct 18, 2023" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
          <p className="text-muted-foreground mt-1">
            View and manage users on your platform.
          </p>
        </div>
        <Button className="shrink-0 gap-2">
          <UserPlus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      <div className="bg-background border border-border/50 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b flex items-center justify-between gap-4 bg-muted/20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full bg-background border border-input rounded-lg pl-9 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/30 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{user.name}</div>
                    <div className="text-muted-foreground text-xs">{user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-muted-foreground"}`} />
                      {user.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination footer */}
        <div className="p-4 border-t bg-muted/10 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 5 of 14,285 users</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
