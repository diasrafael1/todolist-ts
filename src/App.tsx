import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddList } from "./components/AddList";

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddList onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
