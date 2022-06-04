import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const addToList = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Digite o valor"
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;

// Lista de passos pra criação da aplicação da dinâmica 2:
// X Criar o projeto com o npx;
// X Rodar o projeto em um terminal;
// X Limpar o código inicial;
// X Utilizar o useState para criar uma variavel de string para o input;
// X Utilizar o useState para criar uma variavel de array para a lista;
// X Criar a função que adicionar a string no array;
// X Renderizar um botão para chamar a função;
// X Renderizar o input e relacionar ele com o valor da string;
// X Criar uma função para atualizar o valor da variavel, dependendo do valor do input;
// X Renderizar a lista;
