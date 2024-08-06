import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Picture() {
  const [url, setUrl] = useState<string>("");
  const { tag } = useParams();
  useEffect(() => {
    const fetchRandomGift = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=${tag}&rating=pg-13`
        );
        const data = await response.json();
        setUrl(data.data.images.original.url);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomGift();
  }, [tag]);
  return (
    <div className="mt-20">
      {url ? <img src={url} alt="Random GIF" /> : "Loading..."}
    </div>
  );
}
