import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { Badge } from "@/src/components/ui/badge";

export default function RecentOrders() {
  const orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      amount: "$120.00",
      status: "Delivered",
      date: "2025-10-20",
    },
    {
      id: "ORD-002",
      customer: "Sarah Smith",
      amount: "$89.99",
      status: "Pending",
      date: "2025-10-21",
    },
    {
      id: "ORD-003",
      customer: "Ali Khan",
      amount: "$240.50",
      status: "Processing",
      date: "2025-10-22",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      amount: "$59.00",
      status: "Cancelled",
      date: "2025-10-23",
    },
  ];

  const statusColors: Record<string, string> = {
    Delivered: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Processing: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left border-b bg-gray-50">
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Order ID
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Customer
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Amount
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-600">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm font-medium">{order.id}</td>
                    <td className="p-3 text-sm">{order.customer}</td>
                    <td className="p-3 text-sm">{order.amount}</td>
                    <td className="p-3 text-sm">
                      <Badge
                        className={cn(
                          "rounded-full px-2 py-1 text-xs font-medium",
                          statusColors[order.status]
                        )}
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-sm text-gray-600">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
