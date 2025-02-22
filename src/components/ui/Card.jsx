import { Card, CardContent } from "../ui/card";

const Card = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold">Judul Kartu</h2>
        <p className="text-gray-600">Ini adalah isi dari kartu.</p>
      </CardContent>
    </Card>
  );
};

export default Card;
