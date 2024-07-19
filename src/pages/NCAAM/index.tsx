import { useEffect, useState } from "react";
import axios from "axios";
import { API_SERVER_URL, API_KEY, NCAAM_UUID } from "../../config.js";
import { FirstAngle, LastAngle } from "../../components/Icons";

const NCAAMPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [widgetIDs, setWidgetIDs] = useState<Array<string>>([]);

  const getWidgetByPage = (page: number) => {
    setLoading(true);
    const date =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    // const date = "2022-12-25";
    const widgets: any[] = [];
    axios
      .get(
        `${API_SERVER_URL}basketball/v2/events?page=${page}&count=${perPage}&startDate%5Bafter%5D=${date}&order%5BstartDate%5D=asc&league.uuid=${NCAAM_UUID}&api_key=${API_KEY}`
      )
      .then((res) => {
        setTotalPage(Math.ceil(res.data.meta.totalItems / perPage));
        setTotalCount(res.data.meta.totalItems);
        res.data.data.map((value: any, key: number) => {
          if (
            value.attributes.eventStatus !== null &&
            !value.attributes.title.includes("Unknown")
          ) {
            widgets.push(value.attributes.uuid);
          }
          return true;
        });
        setWidgetIDs(widgets);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWidgetByPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.quarter4.io/basketball/widget/embed/161b7887-e6c0-4445-ba31-658e37076e3f/v1.js";
    script.async = true;
    script.charset = "utf-8";
    window.document.body.appendChild(script);
  }, [widgetIDs]);

  const onNext = () => {
    if (currentPage + 1 > totalPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage - 1 === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const onPageNumber = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-2">
      {loading ? (
        <div className="h-screen bg-white">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt=""
            />
          </div>
        </div>
      ) : totalCount > 0 ? (
        <div>
          {widgetIDs.map((value, key) => {
            return (
              <div className="my-8" key={key}>
                <blockquote
                  className="q4-game"
                  data-detail="true"
                  data-color-background="01005F"
                  data-color-text="FFFFFF"
                  data-color-high="FFFFFF"
                  data-color-medium="FFFFFF"
                  data-color-low="FFFFFF"
                  data-sport="basketball"
                  data-q4={value}
                ></blockquote>
              </div>
            );
          })}
          {/* Pagination Start */}
          <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
              <div
                className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                onClick={() => onPageNumber(1)}
              >
                <FirstAngle width={15} height={15} />
              </div>
              <div
                className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                onClick={() => onPrevious()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="flex h-12 font-medium rounded-full bg-gray-200">
                {currentPage - 1 >= 1 ? (
                  <div
                    className="w-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
                    onClick={() => onPageNumber(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="w-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white"
                  onClick={() => onPageNumber(currentPage)}
                >
                  {currentPage}
                </div>
                {currentPage + 1 <= Math.ceil(totalCount / perPage) ? (
                  <div
                    className="w-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
                    onClick={() => onPageNumber(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                onClick={() => onNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
              <div
                className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                onClick={() => onPageNumber(totalPage)}
              >
                <LastAngle width={15} height={15} />
              </div>
            </div>
          </div>
          {/* Pagination End */}
        </div>
      ) : (
        <div className="text-center p-4" style={{ minHeight: "400px" }}>
          <p className="font-bold text-3xl mt-32">
            NCAAM is not available at the moment
          </p>
        </div>
      )}
    </div>
  );
};

export default NCAAMPage;
