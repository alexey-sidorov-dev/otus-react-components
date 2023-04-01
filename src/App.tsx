import React, { FC, useState } from "react";
import Accordion from "./components/Accordion";
import Breaker from "./components/Breaker";
import Columns from "./components/Columns";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Picture from "./components/Picture";
import { HeaderLevel, HeaderProps, Parameter } from "./types";

export const App: FC = () => {
  const [componentName, setComponentName] = useState("-");
  const [componentParameter, setComponentParameter] = useState("-");
  const [render, setRender] = useState(false);
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
      { value: "h1", display: "Уровень 1" },
      { value: "h2", display: "Уровень 2" },
      { value: "h3", display: "Уровень 3" },
    ],
    Paragraph: [
      { value: "normal", display: "Обычный" },
      { value: "bold", display: "Полужирный" },
      { value: "blockquote", display: "Цитата" },
    ],
    Breaker: [
      { value: "one", display: "Одна линия" },
      { value: "double", display: "Две линии" },
    ],
    Accordion: [
      { value: "collapsed", display: "Свёрнутый" },
      { value: "expanded", display: "Развёрнутый" },
    ],
    Picture: [
      { value: "left", display: "Обтекание слева" },
      { value: "right", display: "Обтекание справа" },
      { value: "both", display: "Обтекание с обеих сторон" },
    ],
    Columns: [
      { value: "one", display: "Одна колонка" },
      { value: "two", display: "Две колонки" },
      { value: "three", display: "Три колонки" },
    ],
  };
  const parameters = parametersList[componentName];

  return (
    <div className="app">
      <div className="header">
        Выберите данные для отображения компонента.
        <br />
        <label>
          Компонент:
          <select
            defaultValue={componentName}
            onChange={(e) => {
              setComponentName(e.target.value);
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
        <button className="button" onClick={() => setRender(!render)}>
          {!render ? "Показать" : "Сбросить"}
        </button>
      </div>
      <div className="main">
        {componentName === "Header" && (
          <Header level={componentParameter as HeaderLevel} />
        )}
        {componentName === "Paragraph" && <Paragraph />}
        {componentName === "Breaker" && <Breaker />}
        {componentName === "Accordion" && <Accordion />}
        {componentName === "Picture" && <Picture />}
        {componentName === "Columns" && <Columns />}
      </div>
    </div>
  );
};
