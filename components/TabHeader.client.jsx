"use client";
import TopProjectStyles from "../styles/TopProjects.module.css";

const TabHeader = () => {
  const changeTab = (e) => {
    const tab = e.target.closest(`.${TopProjectStyles["tab"]}`);
    if (!tab) return;

    // Remove tab--active from previous active tab
    document
      .querySelector(`.${TopProjectStyles["tab--active"]}`)
      .classList.remove(`${TopProjectStyles["tab--active"]}`);
    // Add tab--active to newly active tab
    tab.classList.add(`${TopProjectStyles["tab--active"]}`);
    const tabNum = tab.getAttribute("data-num");
    const tabPanes = document.querySelectorAll(
      `.${TopProjectStyles["tab-pane"]}`
    );

    tabPanes.forEach((pane) => {
      pane.style.transform = `translateX(-${(tabNum - 1) * 100}%)`;
    });
  };

  return (
    <div className={TopProjectStyles["tab-header"]} onClick={changeTab}>
      <div
        className={`${TopProjectStyles["tab"]} ${TopProjectStyles["tab--active"]}`}
        data-num="1"
      >
        Project 1
      </div>
      <div className={TopProjectStyles["tab"]} data-num="2">
        Project 2
      </div>
      <div className={TopProjectStyles["tab"]} data-num="3">
        Project 3
      </div>
      <div className={TopProjectStyles["tab"]} data-num="4">
        Project 4
      </div>
    </div>
  );
};

export default TabHeader;
