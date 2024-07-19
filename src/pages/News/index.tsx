import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import getTimeDifference from "../../utils/getTimeDifference";

const NewsPage = () => {
  const [feeds, setFeeds] = useState<Array<any>>([]);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.espn.com%2Fespn%2Frss%2Fnews`
      )
      .then((res) => {
        console.log(res.data);
        setFeeds(res.data.items);
        setData(res.data.feed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goNewLink = (url: string) => {
    window.open(url);
  };

  return (
    <div>
      <div className="grid xl:grid-cols-5 grid-cols-4 gap-4 my-4 sm:px-20 xl:px-28 px-6">
        <div className="col-span-4">
          <div className="md:grid lg:grid-cols-4 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:block hidden text-gray-700">
              <span
                className="text-3xl text-gray-800 font-bold hover:underline cursor-pointer"
                onClick={() => goNewLink(feeds[0]?.link)}
              >
                {feeds[0]?.title}
              </span>
              <br />
              <span>{feeds[0]?.description}</span>
              <div className="mt-4"></div>
              <span>{getTimeDifference(feeds[0]?.pubDate)}</span>
            </div>
            <div className="col-span-2">
              <img
                onClick={() => goNewLink(feeds[0]?.link)}
                className="cursor-pointer mb-4"
                width="100%"
                src={feeds[0]?.enclosure.link}
                alt="No Img"
              />
              <div className="block md:hidden">
                <span
                  className="text-xl text-gray-800 font-bold hover:underline cursor-pointer"
                  onClick={() => goNewLink(feeds[0]?.link)}
                >
                  {feeds[0]?.title}
                </span>
                <br />
                <span className="text-gray-700">{feeds[0]?.description}</span>
                <div className="mt-4"></div>
                <span>{getTimeDifference(feeds[0]?.pubDate)}</span>
              </div>
            </div>
            {feeds.slice(1, 10).map((val, key) => {
              return (
                <div
                  className={`col-span-1 ${key >= 5 ? "xl:hidden block" : ""}`}
                  key={key}
                >
                  <Card className="p-2">
                    <div className="flex md:flex-col flex-row">
                      <div className="md:h-48 h-36 md:w-full w-1/2 overflow-hidden mb-2 md:mr-0 mr-4">
                        <img
                          onClick={() => goNewLink(val.link)}
                          className="cursor-pointer mb-4 w-full min-h-full"
                          src={val.enclosure.link}
                          alt="No Img"
                        />
                      </div>
                      <div className="md:w-full w-1/2 relative">
                        <span
                          className="font-bold hover:underline cursor-pointer"
                          onClick={() => goNewLink(val.link)}
                        >
                          {val.title}
                        </span>
                        <br />
                        <span className="text-gray-700 md:block hidden mb-4">
                          {val.description.length > 100
                            ? val.description.substr(0, 100) + "..."
                            : val.description}
                        </span>
                        <div className="mt-8"></div>
                        <span className="absolute bottom-0">
                          {getTimeDifference(val.pubDate)}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 xl:block hidden 2xl:text-xl text-md">
          {feeds.slice(6, 10).map((val, key) => {
            return (
              <Card className="p-2 m-2" key={key}>
                <span
                  className="font-bold hover:underline cursor-pointer"
                  onClick={() => goNewLink(feeds[5]?.link)}
                >
                  {val.title}
                </span>
                <div className="mt-4"></div>
                <span className="text-base">
                  {getTimeDifference(val.pubDate)}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
