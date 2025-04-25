
function htmlRenderer(markup) {
  return <div className="markup" dangerouslySetInnerHTML={{ __html: markup }} />
}
export default function Project({project}) {
  return (
    <div>
      {/*<h1>{project.title}</h1> */}
        {htmlRenderer(project.desc)}
    </div>
  )
}
