import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "react-i18next";

import PortfolioImage1 from "../assets/portfolio-1.jpg";
import PortfolioImage2 from "../assets/portfolio-2.png";
import PortfolioImage3 from "../assets/portfolio-3.png";
import PortfolioImage4 from "../assets/portfolio-4.png";
import PortfolioImage5 from "../assets/portfolio-5.jpg";
import PortfolioImage6 from "../assets/portfolio-6.png";
import PortfolioImage7 from "../assets/portfolio-7.png";
import PortfolioImage8 from "../assets/portfolio-8.jpg";
import Modal from "../components/modal";

function PortfolioItem({ work, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`border-2 rounded-xl border-white/10 p-6 ${work.light} dark:bg-transparent h-fit group cursor-pointer`}
    >
      <div className="overflow-hidden rounded-xl ">
        <img
          src={work.image}
          className="w-full h-auto object-cover object-center group-hover:scale-110 transition"
        />
      </div>
      <p className="text-sm text-black/50 dark:text-white/50 mt-4">
        {work.category}
      </p>
      <h4 className="text-xl mt-2">{work.title}</h4>
    </div>
  );
}

function Works() {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(() => null);

  const works = [
    {
      category: "Logo",
      title: t("workstitle1"),
      light: "bg-[#D566FF]/10",
      image: PortfolioImage1,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle2"),
      light: "bg-[#DDA10C]/10",
      image: PortfolioImage2,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle3"),
      light: "bg-[#8774FF]/10",
      image: PortfolioImage3,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle4"),
      light: "bg-[#FF6080]/10",
      image: PortfolioImage4,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle5"),
      light: "bg-[#FF6080]/10",
      image: PortfolioImage5,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle6"),
      light: "bg-[#FF6080]/10",
      image: PortfolioImage6,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle7"),
      light: "bg-[#FF6080]/10",
      image: PortfolioImage7,
      description:"",
      
    },
    {
      category: "Logo",
      title: t("workstitle8"),
      light: "bg-[#FF6080]/10",
      image: PortfolioImage8,
      description:"",
      
    },
  ];

  const onClickItem = (item) => {
    console.log(item);
    setModalItem(item);
    setModalOpen(true);
  };

  const onClickCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    function listener(e) {
      console.log(e);
      if (e.key === "Escape") onClickCloseModal();
    }
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keypress", listener);
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-semibold">{t("worksTitle")}</h1>
        <div className="w-48 h-[2px] bg-primary rounded-full"></div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8 flex-1">
            {works
              .filter((_, i) => i % 2 === 0)
              .map((work, i) => (
                <PortfolioItem
                  onClick={() => onClickItem(work)}
                  work={work}
                  key={i}
                />
              ))}
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {works
              .filter((_, i) => i % 2 === 1)
              .map((work, i) => (
                <PortfolioItem
                  onClick={() => onClickItem(work)}
                  work={work}
                  key={i}
                />
              ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClickOutside={onClickCloseModal}
          onClickClose={onClickCloseModal}
        >
          <div>
            <img className="w-full h-auto rounded-xl" src={modalItem.image} />
            <div className="mt-4">
              <span className="text-sm">{modalItem.category}</span>
              <h3 className="text-2xl mt-2">{modalItem.title}</h3>
              <p className="mt-2">{modalItem.description}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Works;
