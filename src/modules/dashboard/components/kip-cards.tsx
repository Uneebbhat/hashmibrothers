import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function KIPCards() {
  const stats = [
    { label: "Total Revenue", value: "$54,320" },
    { label: "Total Orders", value: "1,245" },
    { label: "Customers", value: "823" },
    { label: "Products", value: "312" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-gray-500 font-medium">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
