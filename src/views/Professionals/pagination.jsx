import style from "./index.module.css";
import DoubleLeftArrow from "./SVG/DoubleLeftArrow";
import DoubleRightArrow from "./SVG/DoubleRightArrow";
import LeftArrow from "./SVG/LeftArrow";
import RightArrow from "./SVG/RightArrow";


export default function Pagination({
  ProfessionalsPerPage,
  currentPage,
  allProfessionals,
  paginado,
}) {
  const pagesCount = Math.ceil(allProfessionals / ProfessionalsPerPage);

  // range of numbers
  let firstNumber = 1;
  let lastNumber = 1;
  // adicional numbers at the left and the right of currentpage

  let adicionalNumbers = 2;

  if (window.screen.width < 500) adicionalNumbers = 0;
  if (window.screen.width > 650) adicionalNumbers = 1;
  if (window.screen.width > 1000) adicionalNumbers = 2;

  // total of numbers in the pagination bar
  let countOfNumbers = adicionalNumbers * 2 + 1;

  if (countOfNumbers >= pagesCount) {
    countOfNumbers = pagesCount;
  } else {
    firstNumber = Math.max(currentPage - adicionalNumbers, 1);
    lastNumber = Math.min(currentPage + adicionalNumbers, pagesCount);
    // complete the pagination bar in the end
    if (lastNumber === pagesCount) {
      firstNumber += lastNumber - firstNumber - adicionalNumbers * 2;
    }
  }

  // make the page numbers with the range

  const pageNumbers = new Array(countOfNumbers)
    .fill()
    .map((d, i) => i + firstNumber);

  if (currentPage > pagesCount) paginado(1);
  return (
    <ul className={style.paginated}>
      <li
        onClick={() => paginado(1)}
        className={currentPage === 1 ? style.disabled : ""}
        title="First Page"
      >
        <DoubleLeftArrow />
      </li>
      <li
        onClick={() => paginado(currentPage - 1)}
        className={currentPage === 1 ? style.disabled : ""}
        title="Previous"
      >
        <LeftArrow />
      </li>
      {pageNumbers?.map((number) => (
        <li
          className={currentPage === number ? style.active : ""}
          key={number}
          onClick={() => paginado(number)}
        >
          <p>{number}</p>
        </li>
      ))}
      <li
        onClick={() => paginado(currentPage + 1)}
        className={pagesCount === currentPage ? style.disabled : ""}
        title="Next"
      >
        <RightArrow />
      </li>
      <li
        onClick={() => paginado(pagesCount)}
        className={pagesCount === currentPage ? style.disabled : ""}
        title="Last Page"
      >
        <DoubleRightArrow />
      </li>
    </ul>
  );
}