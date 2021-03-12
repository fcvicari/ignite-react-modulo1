import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [user, setUser] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    if (user !== '') {
      fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data));
    } else {
      setRepositories([]);
    }
  }, [user])

  function getRepositories() {
    const userName = document.getElementById('username').value;
    setUser(userName);
  }

  return (
    <section className="repository-list">
      <form>
        <div>
          <label htmlFor="username">Usuário do GitHub:</label>
          <input id="username" name="username" type="text" /><br />
        </div>
        <div>
          <button type="button" onClick={getRepositories}>Buscar repositórios</button>
        </div>
      </form>

      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository} />
          })
        }
      </ul>
    </section>
  )
}
