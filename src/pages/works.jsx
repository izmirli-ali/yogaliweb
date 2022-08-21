import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "react-i18next";

import PortfolioImage1 from "../assets/portfolio-1.jpg";
import PortfolioImage2 from "../assets/portfolio-2.jpg";
import PortfolioImage3 from "../assets/portfolio-3.jpg";
import PortfolioImage4 from "../assets/portfolio-4.jpg";
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
      category: "UI/UX",
      title: "Chul urina",
      light: "bg-[#D566FF]/10",
      image: PortfolioImage1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.",
    },
    {
      category: "Web Design",
      title: "Aura Dione",
      light: "bg-[#DDA10C]/10",
      image: PortfolioImage2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.",
    },
    {
      category: "Logo",
      title: "Chul Urina",
      light: "bg-[#8774FF]/10",
      image: PortfolioImage3,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.",
    },
    {
      category: "Video",
      title: "Chul Urina",
      light: "bg-[#FF6080]/10",
      image: PortfolioImage4,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.",
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
