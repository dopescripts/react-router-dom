import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { SquareArrowOutUpRight } from "lucide-react";

const Games = () => {
  //   const [data, setData] = useState([]);
  const data =  useLoaderData();
//   console.log(data)
  //   const fetch = useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: "https://jsonfakery.com/games/random/6",
  //       responseType: "json",
  //     })
  //       .then(function (response) {
  //         setData(response.data);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <section className="bg-white lg:grid lg:min-h-screen rounded-2xl max-w-full overflow-hidden">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h2 className="text-2xl font-bold text-emerald-700">Games List:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-4 items-center gap-5 lg:ap-10 mt-5 max-w-full mx-auto overflow-hidden">
          
          {data.map((game) => (
            <div key={game.id} className="bg-emerald-600 rounded-2xl overflow-hidden text-white xl:h-100">
              <div className="group relative h-80 md:h-60 overflow-hidden cursor-pointer">
                <img src={game.background_image} loading="lazy" alt="" className="w-full h-full object-cover" />
                <div className="absolute w-full h-[30px] z-7 bottom-0 inset-x-0 duration-300 ease-in-out translate-y-full group-hover:translate-y-0 bg-emerald-900/80 flex items-center justify-end px-2 text-sm font-semibold">{game.released}</div>
                <div className="absolute w-full opacity-0 duration-200 group-hover:opacity-100 h-full flex items-center justify-center z-5 top-0 bg-gray-900/60">
                  <SquareArrowOutUpRight />
                </div>
                <a href={game.screenshots[0]?.image_url} target="_blank" className="absolute top-0 bottom-0 h-full w-full z-6"></a>
              </div>
              <div className="p-3 flex flex-col justify-between items-start gap-2 w-full">
                <h1 className="text-xl font-semibold">{game.name}</h1>
                <p className="text-sm text-gray-50 truncate max-w-full" title={game.tags.map((tag) => tag.name + ", ")}>
                  <b className="font-semibold">tags:</b> {game.tags.map((tag) => tag.name + ", ")}
                </p>
                <div className="flex content-end items-center justify-end gap-1 w-full">
                  {game.genres?.map((genre) => (
                    <span key={genre.name} className="bg-emerald-700 p-1 px-2 rounded-md text-xs text-emerald-100">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;

export const gameLoader = async () => {
  const res = await axios.get('https://jsonfakery.com/games/random/6');
  return await res.data;
};
