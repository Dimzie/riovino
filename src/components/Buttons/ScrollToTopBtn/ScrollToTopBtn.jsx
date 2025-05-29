import { ScrollBtn, ScrollBtnIcon } from './ScrollToTopBtn.styled';

const ScrollToTopBtn = ({ scrollBtnVisible }) => {
  const doScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollBtn
      onClick={doScrollToTop}
      $scrollBtnVisible={scrollBtnVisible.toString()}
    >
      <ScrollBtnIcon />
    </ScrollBtn>
  );
};

export default ScrollToTopBtn;
