import { FC, SetStateAction, useState } from "react";
import {
  AccordionProps,
  BreakerProps,
  ColumnsProps,
  HeaderProps,
  ParagraphProps,
  Parameter,
  PictureProps,
} from "../../types/types";
import { Accordion } from "../Accordion";
import { Breaker } from "../Breaker";
import { Columns } from "../Columns";
import { Header } from "../Header";
import { Paragraph } from "../Paragraph";
import { Picture } from "../Picture";
import { text, x2text, header } from "../../helpers/constants";

export const Main: FC = () => {
  const [componentName, setComponentName] = useState("-");
  const [componentParameter, setComponentParameter] = useState("-");
  const componentsList = [
    { value: "-", display: "-- Выберите компонент --" },
    { value: "Header", display: "Заголовок" },
    { value: "Paragraph", display: "Параграф" },
    { value: "Breaker", display: "Пробельный блок" },
    { value: "Accordion", display: "Схлопывающийся блок" },
    { value: "Picture", display: "Картинка" },
    { value: "Columns", display: "Колонки" },
  ];

  const parametersList: Record<string, Array<Parameter>> = {
    "-": [{ value: "-", display: "-- Выберите параметр --" }],
    Header: [
      { value: 1, display: "Уровень 1" },
      { value: 2, display: "Уровень 2" },
      { value: 3, display: "Уровень 3" },
      { value: 4, display: "Уровень 4" },
      { value: 5, display: "Уровень 5" },
      { value: 6, display: "Уровень 6" },
    ],
    Paragraph: [
      { value: "normal", display: "Обычный" },
      { value: "italic", display: "Курсив" },
      { value: "blockquote", display: "Цитата" },
    ],
    Breaker: [
      { value: 1, display: "Одна линия" },
      { value: 2, display: "Две линии" },
    ],
    Accordion: [{ value: "true", display: "Развёрнутый" }],
    Picture: [
      { value: "left", display: "Обтекание слева" },
      { value: "right", display: "Обтекание справа" },
      { value: "none", display: "Обтекание отсутствует" },
    ],
    Columns: [
      { value: 2, display: "Две колонки" },
      { value: 3, display: "Три колонки" },
      { value: 4, display: "Четыре колонки" },
    ],
  };

  return (
    <div className="app">
      <div className="header">
        <div className="info">Выберите данные для отображения компонента</div>
        <label>
          Компонент:
          <select
            defaultValue={componentName}
            onChange={(e) => {
              setComponentName(e.target.value);
              setComponentParameter(
                parametersList[e.target.value][0]
                  .value as SetStateAction<string>
              );
            }}
          >
            {componentsList.map((item) => (
              <option key={item.value} value={item.value}>
                {item.display}
              </option>
            ))}
          </select>
          <label>Параметры:</label>
          <select
            defaultValue={componentParameter}
            onChange={(e) => {
              setComponentParameter(e.target.value);
            }}
          >
            {parametersList[componentName].map((item) => (
              <option key={item.value} value={item.value}>
                {item.display}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="main">
        {componentName === "Header" && componentParameter && (
          <Header
            level={componentParameter as unknown as HeaderProps["level"]}
            text={header}
          />
        )}
        {componentName === "Paragraph" && (
          <Paragraph
            style={componentParameter as ParagraphProps["style"]}
            text={x2text}
          />
        )}
        {componentName === "Breaker" && (
          <Breaker
            number={componentParameter as unknown as BreakerProps["number"]}
            text={x2text}
          />
        )}
        {componentName === "Accordion" && (
          <Accordion
            visible={
              JSON.parse(
                componentParameter.toLowerCase()
              ) as unknown as AccordionProps["visible"]
            }
            text={x2text}
          />
        )}
        {componentName === "Picture" && (
          <Picture
            float={componentParameter as unknown as PictureProps["float"]}
            text={x2text}
          />
        )}
        {componentName === "Columns" && (
          <Columns
            number={componentParameter as unknown as ColumnsProps["number"]}
            text={text}
          />
        )}
      </div>
    </div>
  );
};
