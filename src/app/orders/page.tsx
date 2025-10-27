"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import Section from "@/src/components/common/section";
import Container from "@/src/components/common/container";
import { ScrollArea } from "@/src/components/ui/scroll-area";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-1021",
      date: "October 20, 2025",
      status: "Delivered",
      total: 1900,
      items: [
        { name: "Paracetamol 500mg", quantity: 2, price: 1000 },
        { name: "Ibuprofen 200mg", quantity: 1, price: 700 },
      ],
    },
    {
      id: "ORD-1022",
      date: "October 25, 2025",
      status: "Processing",
      total: 2200,
      items: [{ name: "Vitamin D Capsules", quantity: 2, price: 2200 }],
    },
  ];

  return (
    <Section>
      <Container>
        <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <Card className="text-center p-6">
            <CardContent>
              <p className="text-muted-foreground">
                You have not placed any orders yet.
              </p>
              <Button className="mt-4">Browse Products</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader className="flex flex-row justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Placed on {order.date}
                    </p>
                  </div>
                  <Badge
                  // variant={
                  //   order.status === "Delivered"
                  //     ? "success"
                  //     : order.status === "Processing"
                  //     ? "secondary"
                  //     : "outline"
                  // }
                  >
                    {order.status}
                  </Badge>
                </CardHeader>
                <Separator />
                <CardContent>
                  <ScrollArea className="max-h-[250px]">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {order.items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                              Rs. {item.price.toLocaleString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </CardContent>
                <Separator />
                <CardFooter className="flex justify-between">
                  <p className="font-medium">
                    Total: Rs. {order.total.toLocaleString()}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
