import { useEffect, useState } from "react";
import { DashboardCloseButton } from "../DashboardButton";
import axios from "axios";
import { useParams } from "react-router-dom";

const DashboardNewsView = ({ showModalViewHandler }) => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/read/${postId}`)
      .then((response) => {
        setPostId(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  return (
    <>
      <section className="relative pt-7 sm:px-8">
        {postId && ( // Conditionally render content when post data is available
          <div className="w-[100%] pt-10 pb-5 px-3 bg-white shadow-xl rounded md:w-[550px]">
            <div
              className="w-[100%] pt-10 pb-5 px-3 text-white bg-[#2f2f2f] rounded-none  md:pt-6 md:rounded"
              id="News & updates"
            >
              <div className="flex flex-col items-center mb-10">
                <h6 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
                  {postId.title}
                </h6>
                <div className="w-10 h-[3px] bg-[#f97729]" />
              </div>
            </div>

            <div className="p-4 bg-white mt-5 mx-2">
              <div>
                <h6 className="text-lg p-5 lg:text-xl font-bold">{postId.title}</h6>
                <hr className="w[100%]" />
                <p className="text-start p-2">{postId.body}</p>
                <p className="text-start p-2">{postId.image}</p>
              </div>
              <div className="flex justify-start gap-4 p-3">
                <DashboardCloseButton
                  text="Close"
                  showModalHandler={showModalViewHandler}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DashboardNewsView;