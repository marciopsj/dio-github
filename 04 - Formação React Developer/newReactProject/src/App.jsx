import { useState, useEffect } from "react";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState(["Marcio", "Enzo", "Liebe"]);
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    if (usuario === '') {
        return alert('Informe um nome')
    }
    setUsuarios([usuario, ...usuarios]);
    setUsuario("");
  };

  const handleClear = () => {
    setUsuarios(["Marcio", "Enzo", "Liebe"]);
    setUsuario("");
  };

  useEffect(() => {
    setCount(usuarios.length);
  }, [usuarios]);

  return (
    <div className="App">
      <h1>Hello React</h1>
      <h3>Total: {count}</h3>    
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Insira o nome aqui..."
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <button onClick={handleAddUser}>Adicionar</button>
        <button onClick={handleClear}>Limpar</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr>
              <td>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
