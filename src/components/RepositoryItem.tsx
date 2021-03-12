interface RepositoryItemProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>

      {props.repository.description !== null ? (<p>{props.repository.description}</p>) : <br />}

      <div>
        <a href={props.repository.html_url}>Acessar repositório</a>
      </div>
    </ li>
  )
}
